<template>
  <div>
    <h2>"You've got a friend in The Family"</h2>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link to="/history" tag="li">
          <a class="nav-link">HISTORY</a>
        </router-link>
        <router-link to="/contact" tag="li">
          <a class="nav-link">CONTACT</a>
        </router-link>
        <router-link to="/ordering-guide" tag="li">
          <a class="nav-link">ORDER </a>
        </router-link>
        <router-link to="/delivery" tag="li">
          <a class="nav-link">HIGH-SPEED DELIVERY</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
