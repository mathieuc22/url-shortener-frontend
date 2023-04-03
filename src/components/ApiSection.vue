<template>
  <h2 class="homepage-section__title">API REST pour les développeurs</h2>
  <p class="api-section__description">
    Utilisez notre API REST pour intégrer facilement la réduction d'URL dans vos
    applications. Consultez la documentation complète pour plus d'informations.
  </p>
  <router-link to="/api-docs" class="button">Voir la documentation API</router-link>
  <api-code></api-code>
</template>
  
<script setup>
import { useRouter } from "vue-router";
import ApiCode from "./ApiCode.vue";
const router = useRouter();
</script>
  
<style scoped>
.api-section__description {
  margin-bottom: 1rem;
}

.api-section__code-example {
  background-color: var(--color-light);
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: pre-wrap;
}

@media screen and (min-width: 768px) {
  .api-section {
    padding: 2rem;
  }

  .api-section__title {
    font-size: 2rem;
  }
}
</style>
  