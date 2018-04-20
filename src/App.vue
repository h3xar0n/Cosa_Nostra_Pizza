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
import { dbMenuRef, dbOrdersRef } from './firebaseConfig'

export default {
  components: {
    cnpHeader: Header,
    cnpFooter: Footer
  },
  created () {
    this.$store.dispatch('setMenuRef', dbMenuRef),
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
}
</script>

<style>
  body {
    background: #12192c;
  }

  header, footer {
    padding: 40px 0;
  }

  .card {
    margin: 20px 0;
    padding: 5px 10px;
    background: #aaddf7;
    color: #12192c;
  }

  h1, h2 {
    font-family: 'Orbitron', sans-serif;
  }

  h3, p, th, td, button, em, label, input, textarea {
    font-family: 'Ubuntu Mono', monospace;
  }
</style>
