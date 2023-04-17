<template>
  <Header></Header>
  <router-view></router-view>
  <transition name="fade">
    <div class="back-to-top" v-show="isScrolled" @click="scrollToTop">
      <font-awesome-icon icon="arrow-up" />
    </div>
  </transition>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 300;
};

window.addEventListener("scroll", onScroll);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 45px;
  right: 25px;
  background-color: var(--color-dark);
  color: var(--color-light);
  height: 35px;
  width: 35px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  background-color: var(--color-info);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
