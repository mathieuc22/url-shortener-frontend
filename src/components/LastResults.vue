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
        <qrcode-vue :value="result.shortenedUrl" :options="{ size: 100 }"></qrcode-vue>
        <div class="last-results__description">
          <span class="last-results__original-url">URL d'origine :</span>
          <span class="last-results__original-url">{{ result.originalUrl }}</span>
          <span class="last-results__original-url" v-if="result.clicks > 0">Nombre de clics : {{ result.clicks }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
  
<script setup>
import { useShortenedUrls } from "@/composables/useShortenedUrls";
import QrcodeVue from 'qrcode.vue';

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
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
}

.last-results__list-item {
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 2px solid var(--color-light);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


.last-results__shortened-url {
  position: relative;
  font-weight: 500;
  padding: 10px 0;
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

.last-results__description {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.last-results__original-url {
  max-width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.qrcode-container {
  margin-top: 1rem;
}
</style>
