<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">COSA NOSTRA 🍕</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link">HOME</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu"><a class="nav-link">MENU</a></router-link>
        </li>
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
