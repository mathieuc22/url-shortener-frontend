// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import APIPage from '../pages/APIPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/api-docs', component: APIPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
