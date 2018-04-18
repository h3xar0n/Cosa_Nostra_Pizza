<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <cnp-new-pizza></cnp-new-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Remove from Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Margherita</td>
              <td><button class="btn btn-outline-danger btn-sm">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <h3>Current orders:</h3>
      <table class="table table-sm">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <div class="order-number">
            <strong><em>Order Number: 1</em></strong>
            <button class="btn btn-outline-danger btn-sm">X</button>
          </div>
          <tr>
            <td>Margherita</td>
            <td>9"</td>
            <td>1</td>
            <td>$6.95</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <cnp-login></cnp-login>
      </div>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'

export default {
  components: {
    cnpNewPizza: NewPizza,
    cnpLogin: Login
  },
  beforeRouteLeave: (to, from, next) => {
    if(confirm("The moment you try to get out, we'll pull you back in!") === true ) {
      next()
    } else {
      next(false)
    }
  }
}
</script>