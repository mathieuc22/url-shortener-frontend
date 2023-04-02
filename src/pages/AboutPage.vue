<template>
    <div class="about-page">
        <section class="about-section">
            <h2 class="about-section__title">À propos de LienCourt.fr</h2>
            <p class="about-section__description">
                LienCourt.fr est un service de réduction de liens qui permet de raccourcir facilement des URL longues et
                complexes. Notre mission est de simplifier la gestion des liens et d'améliorer leur lisibilité pour les
                utilisateurs finaux. Grâce à notre API REST, les développeurs peuvent également intégrer notre service dans
                leurs propres applications pour générer des liens courts automatiquement.
            </p>
        </section>

        <section class="features-section">
            <h2 class="features-section__title">Fonctionnalités offertes</h2>
            <ul class="features-section__list">
                <li>Création de liens courts personnalisés</li>
                <li>API REST pour l'intégration avec d'autres applications</li>
                <li>Historique des 4 derniers liens générés par l'utilisateur</li>
                <li>Thème clair et sombre pour une expérience utilisateur optimale</li>
            </ul>
        </section>

        <section class="tech-section">
            <h2 class="tech-section__title">Technologies utilisées</h2>
            <ul class="tech-section__list">
                <li>Vue.js pour la création d'une application front-end réactive et performante</li>
                <li>FastAPI pour le développement d'une API REST rapide et sécurisée</li>
                <li>Vite pour la gestion du build et le développement rapide</li>
            </ul>
        </section>
    </div>
</template>
  
<script setup>
  // Vous pouvez ajouter des scripts spécifiques à cette page si nécessaire
</script>
  
<style scoped>
.about-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
}

.about-section,
.features-section,
.tech-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about-section__title,
.features-section__title,
.tech-section__title {
    font-size: 1.5rem;
}

.about-section__description,
.features-section__list,
.tech-section__list {
    font-size: 1rem;
    line-height: 1.5;
}

.features-section__list,
.tech-section__list {
    list-style-type: disc;
    padding-left: 1.5rem;
}
</style>
  