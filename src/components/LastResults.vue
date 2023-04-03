<!-- LastResults.vue -->

<template>
    <section class="last-results">
        <h2 class="last-results__title">Derniers liens raccourcis</h2>
        <ul class="last-results__list">
            <li v-for="(result, index) in recentShortenedUrls" :key="index">
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
.last-results {
    padding: 2rem 0;
}

.last-results__title {
    font-family: var(--font-family-heading);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

.last-results__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.last-results__original-url {
    font-size: 0.875rem;
    margin-left: 1rem;
}
</style>
  