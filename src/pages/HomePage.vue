<template>
  <div class="home-page">
    <HeroSection />
    <section class="shortener-section">
      <ShortenerForm />
    </section>
    <section class="advantages-section">
      <advantages-section></advantages-section>
    </section>
    <section class="api-section">
      <ApiSection />
    </section>
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ShortenerForm from "@/components/ShortenerForm.vue";
import AdvantagesSection from "@/components/AdvantagesSection.vue";
import ApiSection from "@/components/ApiSection.vue";
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.shortener-section,
.api-section,
.advantages-section {
  margin: 1rem 1.5rem;
  padding: 1.5rem;
  background-color: var(--color-bg-secondary);
}

@media screen and (min-width: 768px) {
  .shortener-section,
  .api-section {
    margin: 1rem auto;
    max-width: 800px;
  }
}
</style>

