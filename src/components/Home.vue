<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Cosa Nostra Pizza</h1>
        <h2>You've Got a Friend in the Family</h2>
        <button class="btn btn-success">Hit it.</button>
      </div>
    </div>
  </div>
</template>

<style>
  #home {
    background: url('../../src/assets/cosanostra.jpg');
    background-position: center;
    height: 800px;
    padding: 10%;
  }

  h1, h2, button {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
