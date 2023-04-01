<template>
  <section class="api-section">
    <h2 class="api-section__title">API REST pour les développeurs</h2>
    <p class="api-section__description">
      Utilisez notre API REST pour intégrer facilement la réduction d'URL dans
      vos applications. Consultez la documentation complète pour plus
      d'informations.
    </p>
    <router-link to="/api-docs" class="api-section__cta"
      >Voir la documentation API</router-link
    >
    <pre class="api-section__code-example">
        <code>
  // Exemple d'intégration en JavaScript
  async function shortenUrl(url) {
    const response = await fetch(`https://short.cloudypanda.me/urls?url=${encodeURIComponent(url)}`, {
      method: "POST"
    });
    const data = await response.json();
    return data;
  }
        </code>
      </pre>
  </section>
</template>
  
  <script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
  
  <style scoped>
.api-section {
  padding: 1rem;
  text-align: center;
}

.api-section__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.api-section__description {
  margin-bottom: 1rem;
}

.api-section__cta {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.api-section__cta:hover {
  background-color: var(--color-secondary);
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
  