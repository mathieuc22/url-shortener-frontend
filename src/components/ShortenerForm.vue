<template>
  <form class="shortener-form" @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="url" class="input-label">URL à raccourcir</label>
      <input id="url" v-model="url" type="url" placeholder="https://example.com" class="input"
        :class="{ 'input--error': error }" @input="validateUrl" />
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
    <button class="button" type="submit" :disabled="error || !url || loading">
      <span v-if="!loading">Raccourcir</span>
      <font-awesome-icon v-if="loading" icon="spinner" class="button__spinner" />
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useShortenedUrls } from "@/composables/useShortenedUrls";

const url = ref("");
const error = ref("");
const loading = ref(false);
const { handleSubmit } = useShortenedUrls(url, error, loading);

const validateUrl = () => {
  error.value = "";

  if (url.value === "") {
    error.value = "L'URL ne peut pas être vide.";
    return;
  }

  try {
    const urlObj = new URL(url.value);

    if (urlObj.hostname === "lienb.fr" || urlObj.hostname === "localhost") {
      error.value = "Les URL lienb.fr et localhost ne sont pas autorisées.";
      return;
    }
  } catch (e) {
    error.value = "L'URL est invalide.";
  }
};
</script>
  
<style scoped>
.shortener-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  background-color: var(--color-dark);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.input-group {
  position: relative;
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
  width: 100%;
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

.input--error {
  border-color: var(--color-danger);
}

.error-message {
  color: var(--color-danger);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.generated-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.button:disabled {
  background-color: var(--color-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

.button:disabled:hover {
  background-color: var(--color-disabled);
  color: var(--color-light);
}

.button__spinner {
  animation: buttonSpinner 1s linear infinite;
}

@keyframes buttonSpinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
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

  .error-message {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -18px;
    width: 100%;
  }
}
</style>
