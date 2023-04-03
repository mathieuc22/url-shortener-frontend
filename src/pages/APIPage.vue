<template>
  <div class="page">
    <section class="section">
      <h1 class="section__title">Documentation de l'API</h1>
      <p class="section__description">
        L'API de LienCourt.fr vous permet de créer et récupérer des liens
        raccourcis directement depuis votre propre application ou site web. Vous
        pouvez l'utiliser pour créer des liens personnalisés, suivre les
        statistiques de clics et bien plus encore.
      </p>
    </section>

    <section class="section">
      <h2 class="section__title">Exemples d'utilisation</h2>
      <ApiCode></ApiCode>
    </section>

    <section class="section">
      <h2 class="section__title">Documentation détaillée</h2>
      <p class="section__description">
        Pour consulter la documentation détaillée de l'API, y compris les
        définitions des modèles et des exemples de code supplémentaires, visitez
        notre page de documentation Swagger :
      </p>
      <a class="button" href="https://short.cloudypanda.me/docs" target="_blank" rel="noopener noreferrer">
        Accéder à la documentation
      </a>
    </section>
  </div>
</template>

<script setup>
import ApiCode from '../components/ApiCode.vue';
</script>