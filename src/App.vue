<template>
  <div id="app">
    <h1>URL Shortener</h1>
    <form @submit.prevent="shortenUrl">
      <input v-model="urlToShorten" placeholder="Enter URL to shorten" />
      <button type="submit">Shorten URL</button>
    </form>
    <div v-if="shortenedUrl">
      <p>
        Shortened URL:
        <a :href="shortenedUrl" target="_blank" rel="noopener noreferrer">{{ shortenedUrl }}</a>
      </p>
    </div>
    <div v-if="recentShortUrls.length > 0">
      <h2>Recent Short URLs:</h2>
      <ul>
        <li v-for="(url, index) in recentShortUrls" :key="index">
          <a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL, createShortUrl } from "./api";

export default {
  name: "App",
  data() {
    return {
      urlToShorten: "",
      shortenedUrl: "",
      recentShortUrls: [],
    };
  },
  methods: {
    async shortenUrl() {
      try {
        const { id } = await createShortUrl(this.urlToShorten);
        const newShortUrl = `${API_BASE_URL}/${id}`;
        this.shortenedUrl = newShortUrl;
        this.recentShortUrls.unshift(newShortUrl);
        if (this.recentShortUrls.length > 4) {
          this.recentShortUrls.pop();
        }
      } catch (error) {
        console.error("Error shortening URL:", error.message);
        alert("An error occurred. Please try again.");
      }
    },
  },
};
</script>

<style>
/* Vos styles ici */
</style>
