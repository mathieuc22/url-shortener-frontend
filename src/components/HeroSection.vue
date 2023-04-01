<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">Bienvenue sur LienCourt.fr</h1>
        <p class="hero__subtitle">
          Réduisez vos liens facilement et rapidement avec notre service.
        </p>
        <router-link to="/api-docs" class="button"
          >Découvrez notre API</router-link
        >
      </div>
      <img
        class="hero__image"
        src="/src/assets/hero.png"
        alt="Collaboration et partage de liens courts"
      />
    </div>
  </section>
</template>

<script setup>
const name = "HeroSection";
</script>

<style scoped>
.hero {
  background-color: var(--color-secondary);
  padding: 2rem 0;
  text-align: center;
}

.hero__content {
  max-width: 600px;
  margin: 0 auto;
}

.hero__title {
  font-family: var(--font-family-heading);
  font-size: 2rem;
  color: var(--color-light);
  margin-bottom: 1rem;
}

.hero__subtitle {
  font-size: 1rem;
  color: var(--color-light);
  margin-bottom: 2rem;
}

.hero__image {
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
}
/* Styles pour les écrans plus larges */
@media (min-width: 768px) {
  .hero {
    display: flex;
    align-items: center;
  }
  .hero__content {
    flex: 1;
  }
  .hero__image {
    flex: 1;
    margin-top: 0;
  }
}
</style>
  