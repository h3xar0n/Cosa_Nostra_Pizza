<template>
  <div class="container-fluid">
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>COSA NOSTRA 🍕</h1>
          <h2>IN 30 MINS OR <span class="crimson">ELSE.</span></h2>
          <button class="btn btn-success"
                  @click="goToMenu">get made</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToMenu() {
        this.$router.push({ name: 'menuLink' })
      }
    }
  }
</script>

<style>
  #home {
    background: url('../../src/assets/hiro_n_yt.jpg') no-repeat center center / cover;
    height: auto;
    padding: 10%;
  }

  h1, h2, button {
    margin: 6%;
  }

  .background {
    background: #12192c;
    color: #aec53f;
    border-radius: 20px;
    border: 10px solid #aaddf7;
    margin: 0 auto;
    padding: 20px 0;
    width: 38%;
    min-width: 470px;
  }
  .background h2 {
    color: white;
  }
  .crimson {
    color: red;
  }
  .btn-success {
    color: #1a1b27;
    background-color: #aec53f;
    border: 1px single #1a1b27;
  }
  .btn-success:hover {
    color: #eee;
    background-color: red;
    border-color: #eee;
  }
</style>
