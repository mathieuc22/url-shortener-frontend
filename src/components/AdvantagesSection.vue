<template>
  <h2 class="homepage-section__title">Pourquoi choisir lienb.fr ?</h2>
  <div class="cards">
    <div class="card card--advantages">
      <font-awesome-icon icon="user-clock" class="card--advantages__icon" />
      <h3 class="card--advantages__title">Simplicité d'utilisation</h3>
      <p class="card--advantages__description">
        Créez des liens courts en quelques secondes, sans aucune configuration
        complexe.
      </p>
    </div>
    <div class="card card--advantages">
      <font-awesome-icon icon="edit" class="card--advantages__icon" />
      <h3 class="card--advantages__title">Personnalisation des liens</h3>
      <p class="card--advantages__description">
        Personnalisez vos liens courts pour les rendre plus attrayants et
        faciles à retenir.
      </p>
    </div>
    <div class="card card--advantages">
      <font-awesome-icon icon="chart-bar" class="card--advantages__icon" />
      <h3 class="card--advantages__title">Statistiques de clics</h3>
      <p class="card--advantages__description">
        Suivez les performances de vos liens courts et analysez les statistiques
        de clics pour optimiser vos campagnes.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card--advantages {
  flex: 1;
  min-width: 250px;
}

.card--advantages__icon {
  font-size: 2rem;
}

.card--advantages__title {
  font-size: 1.2rem;
}
</style>
