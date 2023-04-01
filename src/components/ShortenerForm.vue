<template>
  <form class="shortener-form" @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="url" class="input-label">URL à raccourcir</label>
      <input
        id="url"
        v-model="url"
        type="url"
        placeholder="https://example.com"
        class="input"
        required
      />
    </div>
    <button class="button" type="submit">Raccourcir</button>
  </form>
  <div v-if="recentShortenedUrls.length" class="recent-urls">
    <h3>Derniers liens raccourcis :</h3>
    <ul>
      <li v-for="recentUrl in recentShortenedUrls" :key="recentUrl.id">
        <a
          :href="recentUrl.shortenedUrl"
          target="_blank"
          rel="noopener noreferrer"
          >{{ recentUrl.shortenedUrl }}</a
        >
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

//   const API_BASE_URL = "https://short.cloudypanda.me";
const API_BASE_URL = "http://127.0.0.1:8000";

const url = ref("");
const recentShortenedUrls = ref([]);

async function handleSubmit() {
  const response = await fetch(
    `${API_BASE_URL}/urls?url=${encodeURIComponent(url.value)}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    const data = await response.json();
    const shortenedUrl = `${API_BASE_URL}/${data.id}`;
    recentShortenedUrls.value.unshift({ id: data.id, shortenedUrl });
    recentShortenedUrls.value = recentShortenedUrls.value.slice(0, 4);
    url.value = "";
  } else {
    console.error("Erreur lors de la création de l'URL raccourcie");
  }
}
</script>
  
<style scoped>
.shortener-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  background-color: var(--color-secondary);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.input-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-label {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-light);
  margin-bottom: 0.5rem;
}

.input {
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-light);
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.15s ease-in-out;
  background-color: white;
  cursor: text;
}

.input:focus {
  border-color: var(--color-secondary);
}

.generated-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media screen and (min-width: 768px) {
  .shortener-form {
    flex-direction: row;
    align-items: end;
    gap: 1rem;
    min-width: 600px;
    justify-content: space-between;
  }

  .input {
    flex-grow: 1;
    margin-right: 1rem;
  }

  .submit-button {
    flex-shrink: 0;
  }
}
</style>
