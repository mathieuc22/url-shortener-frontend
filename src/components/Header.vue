<template>
  <header class="header">
    <div class="header-container">

      <nav class="nav">
        <router-link to="/" class="nav__logo">
          <img :src="logo" alt="lienb.fr" />
        </router-link>
        <button type="button" class="hamburger" @click="toggleMenu" v-if="!menuOpen" aria-label="Ouvrir le menu">
          <font-awesome-icon icon="bars" />
        </button>
        <button type="button" class="hamburger close" @click="toggleMenu" v-if="menuOpen" aria-label="Fermer le menu">
          <font-awesome-icon icon="times" />
        </button>
        <ul :class="{ nav__links: true, 'nav__links--visible': menuOpen }">
          <li>
            <router-link to="/about" @click="closeMenu">À propos</router-link>
          </li>
          <li>
            <router-link to="/statistics" @click="closeMenu">Statistiques</router-link>
          </li>
          <li>
            <router-link to="/api-docs" @click="closeMenu">API</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">Contact</router-link>
          </li>
        </ul>
      </nav>
      <button type="button" class="theme-toggle" @click="toggleTheme" aria-label="Basculer le thème">
        <font-awesome-icon :icon="themeIcon" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import themeStore from "@/themeStore";

const logo = ref('/logo.webp');

const themeIcon = ref("sun");
const menuOpen = ref(false);

const toggleTheme = () => {
  themeStore.toggleTheme();
  themeIcon.value = themeStore.isDark ? "moon" : "sun";
  logo.value = themeStore.isDark ? '/logo-dark.webp' : '/logo.webp';
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  padding: 0 1rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.nav__logo {
  height: 75px;
}

.nav__logo img {
  height: 100%;
}

.hamburger {
  display: none;
  z-index: 10;
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

.close {
  position: absolute;
  right: 0;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav__links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 500;
    gap: 2rem;
    padding: 1rem 0;
    z-index: 9;
  }

  .nav__links--visible {
    display: flex;
  }

  .nav__links li {
    margin-left: 0;
  }
}

@media screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .nav__links {
    display: flex;
  }
}
</style>
