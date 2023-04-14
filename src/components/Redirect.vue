<template>
    <div>
        Redirection en cours...
    </div>
</template>
  
<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const route = useRoute();

onBeforeMount(async () => {
    const shortId = route.params.shortId;
    const referer = encodeURIComponent(document.referrer);
    const redirectToApiUrl = `${API_BASE_URL}/${shortId}?referer=${referer}`;
    window.location.href = redirectToApiUrl;
});
</script>
  