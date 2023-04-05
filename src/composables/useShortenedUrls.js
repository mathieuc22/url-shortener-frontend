import { ref } from "vue";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const recentShortenedUrls = ref([]);

async function handleSubmit(url) {
  const response = await fetch(
    `${API_BASE_URL}/urls?url=${encodeURIComponent(url.value)}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    const data = await response.json();
    const shortenedUrl = `${API_BASE_URL}/${data.id}`;
    recentShortenedUrls.value.unshift({
      originalUrl: url.value,
      shortenedUrl,
      clicks: data.clicks.length,
    });
    recentShortenedUrls.value = recentShortenedUrls.value.slice(0, 4);
    url.value = "";
  } else {
    console.error("Erreur lors de la création de l'URL raccourcie");
  }
}

export function useShortenedUrls(url) {
  return {
    recentShortenedUrls,
    handleSubmit: url ? () => handleSubmit(url) : null,
  };
}
