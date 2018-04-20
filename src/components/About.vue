<template>
  <div class="container">
    <h2>"You've got a friend in The Family"</h2>
    <nav class="navbar navbar-toggleable-md navbar-dark">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'historyLink' }" tag="li">
          <a class="nav-link">HISTORY</a>
        </router-link>
        <router-link :to="{ name: 'contactLink' }" tag="li">
          <a class="nav-link">CONTACT</a>
        </router-link>
        <router-link :to="{ name: 'orderingGuideLink' }" tag="li">
          <a class="nav-link">ORDER </a>
        </router-link>
        <router-link :to="{ name: 'deliveryLink' }" tag="li">
          <a class="nav-link">HIGH-SPEED DELIVERY</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  h2 {
    color: #eee;
  }
</style>
