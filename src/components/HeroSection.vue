<template>
  <section class="hero">
    <picture ref="heroPicture">
      <source media="(min-width: 768px)" srcset="@/assets/hero.webp" />
      <source media="(min-width: 425px)" srcset="@/assets/hero-tablet.webp" />
      <source media="(max-width: 424px)" srcset="@/assets/hero-mobile.webp" />
      <img ref="heroImage" alt="Hero background" loading="lazy" />
    </picture>
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
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  padding: 2rem;
  position: relative;
}

.hero picture,
.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero img {
  filter: brightness(0.4);
}

.hero__overlay {
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
