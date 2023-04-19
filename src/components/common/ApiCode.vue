<template>
  <pre>
      <code>
  // Exemple d'intégration en JavaScript
  async function shortenUrl(url) {
    const response = await fetch(
      `https://api.lienb.fr/urls?url=${encodeURIComponent(url)}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    return data;
  }
      </code>
    </pre>
</template>