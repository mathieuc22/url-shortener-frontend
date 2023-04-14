// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import APIPage from "../pages/APIPage.vue";
import Contact from "@/pages/Contact.vue";
import FormSuccess from "@/components/FormSuccess.vue";
import FormError from "@/components/FormError.vue";
import Redirect from "@/components/Redirect.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "LienCourt.fr - Accueil",
      description:
        "Réduisez et partagez facilement vos liens avec LienCourt.fr, le service de raccourcissement de liens français.",
    },
  },
  {
    path: "/api-docs",
    name: "ApiDocs",
    component: APIPage,
    meta: {
      title: "LienCourt.fr - Documentation API",
      description:
        "Découvrez comment utiliser notre API pour intégrer LienCourt.fr dans vos applications et services.",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      title: "LienCourt.fr - À propos",
      description:
        "Apprenez-en plus sur LienCourt.fr, le service de raccourcissement de liens français.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/contact/success",
    name: "FormSuccess",
    component: FormSuccess,
  },
  {
    path: "/contact/error",
    name: "FormError",
    component: FormError,
  },
  {
    path: "/:shortId",
    name: "Redirect",
    component: Redirect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  // Met à jour le titre de la page
  document.title = to.meta.title || "LienCourt.fr";

  // Met à jour la balise "description"
  const descriptionMetaTag = document.querySelector('meta[name="description"]');
  if (to.meta.description) {
    descriptionMetaTag.setAttribute("content", to.meta.description);
  } else {
    descriptionMetaTag.setAttribute(
      "content",
      "Réduisez et partagez facilement vos liens avec LienCourt.fr, le service de raccourcissement de liens français."
    );
  }
});

export default router;
