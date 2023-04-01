<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav__logo">LienCourt.fr</router-link>
        <ul class="nav__links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/api-docs">Documentation API</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
        </ul>
      </nav>
      <button class="theme-toggle" @click="toggleTheme">
        <font-awesome-icon :icon="themeIcon" />
      </button>
    </div>
  </header>
</template>
  
<script setup>
import { ref } from "vue";
import themeStore from "@/themeStore";

const themeIcon = ref("sun");

const toggleTheme = () => {
  themeStore.toggleTheme();
  themeIcon.value = themeStore.isDark ? "moon" : "sun";
};
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  padding: 1rem 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.nav__logo {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
}

.nav__links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__links li {
  margin-left: 1rem;
}

.nav__links a {
  transition: color var(--transition-duration);
}

.theme-toggle {
  width: 20px;
}
.theme-toggle:hover,
.nav__links a:hover {
  background-color: var(--color-primary);
  color: var(--color-info);
}
</style>
  