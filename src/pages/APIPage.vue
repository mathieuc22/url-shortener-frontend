<template>
    <div class="api-docs-page">
        <section class="api-docs-page__intro">
            <h1>Documentation de l'API</h1>
            <p>
                L'API de LienCourt.fr vous permet de créer et récupérer des liens raccourcis directement
                depuis votre propre application ou site web. Vous pouvez l'utiliser pour créer des liens
                personnalisés, suivre les statistiques de clics et bien plus encore.
            </p>
        </section>

        <section class="api-docs-page__examples">
            <h2>Exemples d'utilisation</h2>
            <pre>
      // Requête POST pour créer un lien raccourci
      fetch("https://short.cloudypanda.me/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: "https://example.com" })
      })
      .then(response => response.json())
      .then(data => console.log(data));
            </pre>
        </section>

        <section class="api-docs-page__swagger">
            <h2>Documentation détaillée</h2>
            <p>
                Pour consulter la documentation détaillée de l'API, y compris les définitions des modèles
                et des exemples de code supplémentaires, visitez notre page de documentation Swagger :
            </p>
            <a href="https://short.cloudypanda.me/docs" target="_blank" rel="noopener noreferrer">
                Accéder à la documentation Swagger
            </a>
        </section>
    </div>
</template>
  
<script setup>
  // Code de configuration si nécessaire
</script>
  
<style scoped>
.api-docs-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.api-docs-page__intro,
.api-docs-page__examples,
.api-docs-page__swagger {
    margin-bottom: 2rem;
}

.api-docs-page__intro p {
    font-size: 1.1rem;
    line-height: 1.5;
}

.api-docs-page h1,
.api-docs-page h2 {
    font-weight: bold;
    margin-bottom: 1rem;
}

.api-docs-page__examples pre {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 1rem;
    white-space: pre-wrap;
}

.api-docs-page__swagger a {
    color: var(--color-primary);
    text-decoration: none;
}

.api-docs-page__swagger a:hover {
    text-decoration: underline;
}
</style>
  