<template>
    <header class="header">
      <div class="container">
        <nav class="nav">
          <router-link to="/" class="nav__logo">LienCourt.fr</router-link>
          <ul class="nav__links">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/api-docs">Documentation API</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    // ...
  }
  </script>
  
  <style scoped>
  .header {
    background-color: var(--color-primary);
    padding: 1rem 0;
  }
  
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav__logo {
    font-family: var(--font-family-heading);
    font-size: 1.5rem;
    color: var(--color-light);
  }
  
  .nav__links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav__links li {
    margin-left: 1rem;
  }
  
  .nav__links a {
    color: var(--color-light);
    transition: color var(--transition-duration);
  }
  
  .nav__links a:hover {
    color: var(--color-info);
  }
  </style>
  