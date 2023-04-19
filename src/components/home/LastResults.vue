<!-- LastResults.vue -->

<template>
  <section class="homepage-section" v-if="recentShortenedUrls.length > 0">
    <h2 class="homepage-section__title">Derniers liens raccourcis</h2>
    <ul class="cards">
      <li class="card" v-for="(result, index) in recentShortenedUrls" :key="index">
        <button class="delete-icon" @click="removeItem(index)">
          <font-awesome-icon icon="trash" />
        </button>
        <button class="copy-icon" @click="copy(result.shortenedUrl)">
          <font-awesome-icon icon="link" />
        </button>
        <a class="card__shortened-url" @click="result.clicks += 1" :href="result.shortenedUrl" target="_blank"
          rel="noopener noreferrer">{{
            result.shortenedUrl }}</a>
        <qrcode-vue :value="result.shortenedUrl" :options="{ size: 100 }"></qrcode-vue>
        <div class="card__description">
          <span class="card__original-url">URL d'origine :</span>
          <span class="card__original-url">{{ result.originalUrl }}</span>
          <span class="card__original-url" v-if="result.clicks > 0">Nombre de clics : {{ result.clicks }}</span>
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

const removeItem = (index) => {
  recentShortenedUrls.value.splice(index, 1);
}

</script>
  
<style scoped>
.card {
  width: 250px;
  height: 300px;
}

.card__shortened-url {
  position: relative;
  font-weight: 500;
  padding: 10px 0;
}

.card__shortened-url:before {
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

.card__shortened-url:after {
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

.card__shortened-url:hover:before,
.card__shortened-url:hover:after {
  display: block;
}

.card__description {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.card__original-url {
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

.delete-icon:hover,
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

.delete-icon {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  color: var(--color-light);
  border-radius: 50%;
  position: absolute;
  top: -9px;
  right: -9px;
  cursor: pointer;
  font-size: 10px;
}
</style>
