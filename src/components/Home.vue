<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>COSA NOSTRA 🍕</h1>
        <h2>IN 30 MINS</h2>
        <h2 class="crimson">OR ELSE...</h2>
        <button class="btn btn-success">Hit to Get Made.</button>
      </div>
    </div>
  </div>
</template>

<style>
  #home {
    background: url('../../src/assets/cosanostra.jpg');
    background-position: center;
    height: auto;
    padding: 10%;
  }

  h1, h2, button {
    margin: 6%;
  }

  .background {
    background: #141519cc;
    color: #f1ee71;
    border-radius: 20px;
    border: 10px double white;
    width: 40%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .background h2 {
    color: white;
  }
  h2.crimson {
    color: red;
  }
</style>
