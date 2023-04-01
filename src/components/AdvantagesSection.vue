<template>
  <section class="advantages">
    <div class="container">
      <h2 class="section-title">Avantages de l'utilisation de LienCourt.fr</h2>
      <div class="advantages-grid">
        <div class="advantages-item">
          <font-awesome-icon
            :icon="['fas', 'rocket']"
            class="advantages-icon"
          />
          <h3 class="advantages-subtitle">Simplicité d'utilisation</h3>
          <p class="advantages-description">
            Il est extrêmement facile d'utiliser LienCourt.fr pour raccourcir
            vos liens. Il suffit de coller votre lien original, de cliquer sur
            le bouton de raccourcissement, et vous obtenez un lien court en
            quelques secondes.
          </p>
        </div>
        <div class="advantages-item">
          <font-awesome-icon :icon="['fas', 'link']" class="advantages-icon" />
          <h3 class="advantages-subtitle">
            Personnalisation des liens raccourcis
          </h3>
          <p class="advantages-description">
            Avec LienCourt.fr, vous pouvez personnaliser les liens raccourcis
            pour qu'ils correspondent à votre marque ou à votre entreprise. Vous
            pouvez choisir votre propre texte de lien court et personnaliser le
            domaine de votre lien raccourci.
          </p>
        </div>
        <div class="advantages-item">
          <font-awesome-icon
            :icon="['fas', 'chart-bar']"
            class="advantages-icon"
          />
          <h3 class="advantages-subtitle">Statistiques de clics</h3>
          <p class="advantages-description">
            LienCourt.fr vous fournit des statistiques détaillées sur les clics
            de vos liens raccourcis. Vous pouvez voir le nombre de clics, les
            référents, les emplacements géographiques et bien plus encore.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 60px;
}

.advantages {
  background-color: var(--color-light);
  padding: 60px 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
}

.advantages-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.advantages-icon {
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.advantages-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 20px;
}

.advantages-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
</style>