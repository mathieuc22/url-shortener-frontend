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

      <p>Vous pouvez également fournir le lien en JSON...</p>
      <pre>
                <code>
  // Exemple d'intégration en JavaScript avec un JSON
  async function shortenUrlWithJson(url) {
    const response = await fetch('https://short.cloudypanda.me/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data;
  }
                </code>
                </pre>

      <p>... ou encore utiliser l'API avec curl :</p>
      <pre>
          <code>
  // Créer un lien raccourci en utilisant curl
  curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' https://short.cloudypanda.me/urls
          </code>
          </pre>
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