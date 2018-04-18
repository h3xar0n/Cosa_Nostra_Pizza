<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">COSA NOSTRA 🍕</a>
      <ul class="navbar-nav">
          <router-link :to="{ name: 'homeLink' }" tag="li">
            <a class="nav-link">HOME</a>
          </router-link>
          <router-link :to="{ name: 'menuLink' }">
            <a class="nav-link">MENU</a>
          </router-link>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    margin-bottom: 20px;
    font-family: 'Orbitron', sans-serif;
  }

  .navbar-brand {
    font-size: 1.5em;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    margin: 0 1.5em;
  }
</style>
