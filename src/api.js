const API_BASE_URL = "http://127.0.0.1:8000";

async function createShortUrl(url) {
  const response = await fetch(
    `${API_BASE_URL}/urls?url=${encodeURIComponent(url)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error creating short URL: ${response.statusText}`);
  }

  return await response.json();
}

async function getAllShortUrls() {
  const response = await fetch(`${API_BASE_URL}/urls`);

  if (!response.ok) {
    throw new Error(`Error fetching all short URLs: ${response.statusText}`);
  }

  return await response.json();
}

async function getShortUrl(id) {
  const response = await fetch(`${API_BASE_URL}/urls/${id}`);

  if (!response.ok) {
    throw new Error(
      `Error fetching short URL with id ${id}: ${response.statusText}`
    );
  }

  return await response.json();
}

export { API_BASE_URL, createShortUrl, getAllShortUrls, getShortUrl };
