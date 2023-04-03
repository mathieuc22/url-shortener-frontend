<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1 class="hero__title">Bienvenue sur LienCourt.fr</h1>
      <p class="hero__description">
        Raccourcissez vos liens et obtenez des statistiques de clics
      </p>
      <ShortenerForm />
    </div>
  </section>
</template>

<script setup>
import ShortenerForm from "@/components/ShortenerForm.vue";
// Importer les données si nécessaire
</script>

<style scoped>
.hero {
  background-image: url("../src/assets/hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  padding: 2rem;
  position: relative;
}

.hero__overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero__content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  color: white;
}

.hero__title {
  font-family: var(--font-family-heading);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.hero__description {
  font-size: 1rem;
  margin-bottom: 2rem;
}

/* Media Queries */

@media screen and (min-width: 768px) {

  .hero__title {
    font-size: 2.5rem;
  }

  .hero__description {
    font-size: 1.25rem;
  }
}
</style>
