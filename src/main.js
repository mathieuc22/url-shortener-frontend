import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faRocket,
    faLink,
    faChartBar,
    faSun,
    faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './style.css'

import App from './App.vue';
import router from './router';

library.add(faSun, faMoon, faRocket, faLink, faChartBar);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');