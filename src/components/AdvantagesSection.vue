<template>
  <h2 class="advantages__title">Pourquoi choisir LienCourt.fr ?</h2>
  <div class="advantages__cards">
    <div class="advantages-card">
      <font-awesome-icon icon="user-clock" class="advantages-card__icon" />
      <h3 class="advantages-card__title">Simplicité d'utilisation</h3>
      <p class="advantages-card__description">
        Créez des liens courts en quelques secondes, sans aucune configuration
        complexe.
      </p>
    </div>
    <div class="advantages-card">
      <font-awesome-icon icon="edit" class="advantages-card__icon" />
      <h3 class="advantages-card__title">Personnalisation des liens</h3>
      <p class="advantages-card__description">
        Personnalisez vos liens courts pour les rendre plus attrayants et
        faciles à retenir.
      </p>
    </div>
    <div class="advantages-card">
      <font-awesome-icon icon="chart-bar" class="advantages-card__icon" />
      <h3 class="advantages-card__title">Statistiques de clics</h3>
      <p class="advantages-card__description">
        Suivez les performances de vos liens courts et analysez les statistiques
        de clics pour optimiser vos campagnes.
      </p>
    </div>
  </div>
</template>

<style scoped>
.advantages__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.advantages__cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.advantages-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--color-light);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
}

.advantages-card__icon {
  font-size: 2rem;
}

.advantages-card__title {
  font-size: 1.2rem;
}

@media screen and (min-width: 768px) {
  .advantages__cards {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
