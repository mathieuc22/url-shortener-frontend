<template>
  <section class="contact">
    <div class="container">
      <h1>Contactez-nous</h1>
      <form name="contact" class="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" v-model="message" required></textarea>
        </div>
        <button class="button" type="submit">Envoyer</button>
      </form>
    </div>
  </section>
</template>
  
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const message = ref("");

function encode(data) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

const handleSubmit = async (event) => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  const axiosConfig = {
    header: { "Content-Type": "application/x-www-form-urlencoded" }
  };
  axios.post(
    "/",
    encode({
      "form-name": "contact",
      ...formData
    }),
    axiosConfig
  )
    .then(() => router.push("/contact/success"))
    .catch(() => router.push("/contact/error"))
}
</script>
  
<style scoped>
.contact {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}
</style>
  