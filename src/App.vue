<template>
  <div id="app">
    <div class="container">
      <cnp-header></cnp-header>
    </div>
    <div class="container-flex">
      <cnp-home></cnp-home>
    </div>
    <div class="container">
      <cnp-menu></cnp-menu>
    </div>
    <div class="container">
      <cnp-footer></cnp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

export default {
  components: {
    cnpHeader: Header,
    cnpFooter: Footer,
    cnpHome:   Home,
    cnpMenu:   Menu
  }
}
</script>

<style>

</style>
