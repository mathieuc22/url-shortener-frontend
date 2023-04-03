<!-- LastResults.vue -->

<template>
  <section class="homepage-section" v-if="recentShortenedUrls.length > 0">
    <h2 class="homepage-section__title">Derniers liens raccourcis</h2>
    <ul class="last-results__list">
      <li class="last-results__list-item" v-for="(result, index) in recentShortenedUrls" :key="index">
        <a :href="result.shortenedUrl" target="_blank" rel="noopener noreferrer">{{ result.shortenedUrl }}</a>
        <span class="last-results__original-url">{{ result.originalUrl }}</span>
      </li>
    </ul>
  </section>
</template>
  
<script setup>
import { useShortenedUrls } from "@/composables/useShortenedUrls";

const { recentShortenedUrls } = useShortenedUrls();
</script>
  
<style scoped>
.last-results__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.last-results__list-item {
  display: flex;
  flex-wrap: wrap;
}

.last-results__list-item>* {
  flex: 1;
}

.last-results__original-url {
  font-size: 0.875rem;
}
</style>
  