<template>
  <section class="cta-banner">
    <div class="container">
      <h2 class="cta-banner__title">Besoin d'aide ou d'informations supplémentaires ?</h2>
      <p class="cta-banner__subtitle">N'hésitez pas à nous contacter.</p>
      <router-link to="/contact" class="button button--dark">Contactez-nous</router-link>
    </div>
  </section>
</template>
  
<style scoped>
.cta-banner {
  background-color: var(--color-primary);
  padding: 2rem 0;
  text-align: center;
  color: var(--color-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cta-banner__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cta-banner__subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
</style>
  