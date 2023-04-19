<template>
  <div class="home-page">
    <HeroSection />
    <LastResults />
    <section class="homepage-section">
      <advantages-section></advantages-section>
    </section>
    <ContactCTA />
    <ApiSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import LastResults from "@/components/home/LastResults.vue";
import AdvantagesSection from "@/components/home/AdvantagesSection.vue";
import ApiSection from "@/components/home/ApiSection.vue";
import ContactCTA from "@/components/home/ContactCTA.vue";
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.homepage-section {
  padding: 1.5rem;
  background-color: var(--color-bg-secondary);
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.homepage-section__title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media screen and (min-width: 768px) {

  .homepage-section {
    margin: 1rem auto;
    max-width: 1024px;
  }
}
</style>

