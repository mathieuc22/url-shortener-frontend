<template>
  <div class="page">
    <section class="section">
      <h1 class="section__title">Contactez-nous</h1>
      <p class="section__description">
        N'hésitez pas à nous contacter si vous avez des questions, des commentaires ou des suggestions concernant notre
        service de réduction de liens. Nous sommes toujours ravis de recevoir des retours d'expérience de nos
        utilisateurs, car cela nous aide à améliorer et à développer notre plateforme. Utilisez le formulaire ci-dessous
        pour nous envoyer un message, et nous vous répondrons dans les plus brefs délais. Votre avis est précieux pour
        nous, et nous sommes impatients de vous entendre !
      </p>
    </section>

    <section class="section">
      <h2 class="section__title">Formulaire de contact</h2>
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
    </section>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = async (event) => {
  const formData = new FormData();
  formData.append("form-name", "contact");
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => router.push("/contact/success"))
    .catch(() => router.push("/contact/error"));
};
</script>
  
<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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
  