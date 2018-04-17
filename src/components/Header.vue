<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">COSA NOSTRA 🍕</a>
      <ul class="navbar-nav">
          <router-link to="/" tag="li">
            <a class="nav-link">HOME</a>
          </router-link>
          <router-link to="/menu" tag="li">
            <a class="nav-link">MENU</a>
          </router-link>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-item {
    margin: 0 1.5em;
  }
</style>
