<template>
    <div class="page">
        <section class="section">
            <h1 class="section__title">Statistiques</h1>
            <p class="section__description">
                Entrez l'ID ou le lien court pour obtenir des informations sur le
                nombre de clics, les clics par jour et les référents. Utilisez ces
                données pour analyser l'efficacité de vos liens courts et optimiser
                leur utilisation.
            </p>
        </section>
        <section class="section">
            <form class="statistics-form" @submit.prevent="fetchStatistics">
                <div class="input-group">
                    <label for="id" class="input-label">ID ou lien court</label>
                    <input id="id" v-model="inputId" type="text" class="input" :class="{ 'input--error': error }"
                        required />
                </div>
                <button class="button" type="submit" :disabled="loading">
                    <template v-if="loading">
                        <font-awesome-icon icon="spinner" spin />
                    </template>
                    <template v-else>
                        Voir les statistiques
                    </template>
                </button>
            </form>
            <div v-if="error" class="error-message">{{ error }}</div>
        </section>

        <section class="section" v-if="statistics && !error">
            <h2 class="section__title">Total de clics : {{ statistics.total_clicks }}</h2>
            <div class="statistics-section">
                <h3 class="statistics-section__title">Clics par jour :</h3>
                <ul class="statistics-list">
                    <li v-for="(count, date) in statistics.clicks_per_day" :key="date">
                        <span class="statistics-item__date">{{ date }}</span>
                        <span class="statistics-item__count">{{ count }}</span>
                    </li>
                </ul>
            </div>
            <div class="statistics-section">
                <h3 class="statistics-section__title">Référents :</h3>
                <ul class="statistics-list">
                    <li v-for="(count, referrer) in statistics.referrers" :key="referrer">
                        <span class="statistics-item__referrer">{{ referrer || 'Direct' }}</span>
                        <span class="statistics-item__count">{{ count }}</span>
                    </li>
                </ul>
            </div>

        </section>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const inputId = ref("");
const statistics = ref(null);
const loading = ref(false);
const error = ref("");

const router = useRouter();

onMounted(async () => {
    const queryParams = router.currentRoute.value.query;
    if (queryParams.id) {
        inputId.value = queryParams.id;
        await fetchStatistics();
    }
});

async function fetchStatistics() {
    if (!inputId.value) {
        error.value = "Veuillez saisir un ID ou un lien court.";
        return;
    }

    error.value = "";
    loading.value = true;

    const id = inputId.value.includes("/") ? inputId.value.split("/").pop() : inputId.value;
    const response = await fetch(`${API_BASE_URL}/statistics/${id}`);

    loading.value = false;

    if (response.ok) {
        statistics.value = await response.json();
    } else {
        error.value = "Erreur lors de la récupération des statistiques. Veuillez vérifier l'ID ou le lien court.";
    }
}
</script>

  
<style scoped>
.statistics-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
    max-width: 250px;
}

.statistics-section {
    width: 100%;
    margin-bottom: 1.5rem;
}

.statistics-section__title {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--color-text);
    margin-bottom: 0.5rem;
}

.statistics-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.statistics-item__date,
.statistics-item__referrer {
    display: inline-block;
    font-weight: bold;
    color: var(--color-text);
    margin-right: 1rem;
}

.statistics-item__count {
    display: inline-block;
    color: var(--color-text);
}
</style>
  