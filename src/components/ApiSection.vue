<template>
  <section class="homepage-section">
    <h2 class="homepage-section__title">API REST pour les développeurs</h2>
    <div class="api-section">
      <div class="api-section__column">
        <img class="api-section__illustration" :src="illustration" alt="Femme qui travaille sur son ordinateur">
        <p class="api-section__description">
          Utilisez notre API REST pour intégrer facilement la réduction d'URL dans vos
          applications. Consultez la documentation complète pour plus d'informations.
        </p>
      </div>
      <div class="api-section__code">
        <api-code></api-code>
      </div>
    </div>
    <router-link to="/api-docs" class="button">Voir la documentation API</router-link>
  </section>
</template>
  
<script setup>
import { useRouter } from "vue-router";
import ApiCode from "./ApiCode.vue";
import illustration from "@/assets/woman-working-on-computer.png"
const router = useRouter();
</script>
  
<style scoped>
.homepage-section {
  gap: 2rem;
}

.api-section__column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
}

.api-section__description {
  margin-bottom: 1rem;
}

.api-section__illustration {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid var(--color-secondary);
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
    display: flex;
    flex-direction: row;
  }

  .api-section__column {
    width: 35%;
    text-align: left;
  }

  .api-section__code {
    width: 75%;
  }

}
</style>
  