import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRocket,
  faLink,
  faChartBar,
  faSun,
  faMoon,
  faUserClock,
  faBars,
  faTimes,
  faEdit,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./style.css";

import App from "./App.vue";
import router from "./router";

library.add(
  faSun,
  faMoon,
  faRocket,
  faLink,
  faChartBar,
  faUserClock,
  faBars,
  faTimes,
  faEdit,
  faArrowUp
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
