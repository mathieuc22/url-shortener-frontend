<template>
  <form class="shortener-form" @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="url" class="input-label">URL à raccourcir</label>
      <input id="url" v-model="url" type="url" placeholder="https://example.com" class="input" required />
    </div>
    <button class="button" type="submit">Raccourcir</button>
  </form>
</template>
  
<script setup>
import { ref } from "vue";
import { useShortenedUrls } from "@/composables/useShortenedUrls";

const url = ref("");
const { handleSubmit } = useShortenedUrls(url);
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
  color: var(--color-dark);
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
