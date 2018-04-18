<template>
  <div id="app">
    <div class="container">
      <cnp-header></cnp-header>
    </div>
    <router-view></router-view>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>      
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>     
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>       
      </div>
    </div>
    <div class="container">
      <cnp-footer></cnp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    cnpHeader: Header,
    cnpFooter: Footer
  }
}
</script>

<style>

  h1, h2 {
    font-family: 'Orbitron', sans-serif;
  }

  h3, p, th, td, button, em, label, input, textarea {
    font-family: 'Ubuntu Mono', monospace;
  }
</style>
