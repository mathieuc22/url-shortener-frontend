<!-- LastResults.vue -->

<template>
  <section class="homepage-section" v-if="recentShortenedUrls.length > 0">
    <h2 class="homepage-section__title">Derniers liens raccourcis</h2>
    <ul class="last-results__list">
      <li class="last-results__list-item" v-for="(result, index) in recentShortenedUrls" :key="index">
        <button class="copy-icon" @click="copy(result.shortenedUrl)">
          <font-awesome-icon icon="link" />
        </button>
        <a class="last-results__shortened-url" :href="result.shortenedUrl" target="_blank" rel="noopener noreferrer">{{
          result.shortenedUrl }}</a>
        <span class="last-results__original-url">URL d'origine : {{ result.originalUrl }}</span>
      </li>
    </ul>
  </section>
</template>
  
<script setup>
import { useShortenedUrls } from "@/composables/useShortenedUrls";

const { recentShortenedUrls } = useShortenedUrls();

const toClipoard = async (text) => {
  if ("clipboard" in navigator && typeof navigator.clipboard.writeText === "function") {
    // Chrome
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  } else {
    // Firefox
    const input = document.createElement("input");
    input.value = text;
    input.style.position = "fixed";
    input.style.top = "-2000px";
    document.body.appendChild(input);
    input.select();
    try {
      const res = await Promise.resolve(document.execCommand("copy"));
      document.body.removeChild(input);
      return res;
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}

const copy = (url) => {
  toClipoard(url);
}

</script>
  
<style scoped>
.last-results__list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
}

.last-results__list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  background-color: var(--color-light);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


.last-results__shortened-url {
  position: relative;
  background-color: var(--color-light);
  font-weight: 500;
  padding: 10px;
}

.last-results__shortened-url:before {
  content: '';
  display: none;
  position: absolute;
  z-index: 9998;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, .72);
}

.last-results__shortened-url:after {
  content: 'Ouvrir le lien';
  display: none;
  position: absolute;
  z-index: 9999;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  color: #fff;
  font-size: 10px;
  padding: 5px;
  text-align: center;

  background: rgba(0, 0, 0, .72);
  border-radius: 3px;
}

.last-results__shortened-url:hover:before,
.last-results__shortened-url:hover:after {
  display: block;
}

.last-results__original-url {
  display: none;
  padding: 10px;
  flex: 1;
}


.copy-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark);
  color: var(--color-light);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.copy-icon:hover {
  background-color: var(--color-info);

}

.copy-icon:before {
  content: '';
  display: none;
  position: absolute;
  z-index: 9998;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, .72);
}

.copy-icon:after {
  content: 'Copier';
  display: none;
  position: absolute;
  z-index: 9999;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  color: #fff;
  font-size: 10px;
  padding: 5px;
  text-align: center;

  background: rgba(0, 0, 0, .72);
  border-radius: 3px;
}

.copy-icon:hover:before,
.copy-icon:hover:after {
  display: block;
}

.copy-icon:active,
.copy-icon:focus {
  outline: none;
}

.copy-icon:focus:after {
  content: 'Copié!';
}



@media screen and (min-width: 768px) {
  .last-results__list-item {
    flex-direction: row;
  }


  .last-results__shortened-url {
    margin-left: 1rem;
  }

  .last-results__original-url {
    display: block;
  }
}
</style>
  