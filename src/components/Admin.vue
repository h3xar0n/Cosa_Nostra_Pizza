<template>
  <div class="container">
    <section v-if="currentUser">
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
            <tbody :key="item['.key']" v-for="item in getMenuItems">
              <tr>
                <td>{{ item.name }}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm"
                            @click="removeMenuItem(item['.key'])">
                      X
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <h3>Current orders: {{ numberOfOrders }}</h3>
        <table class="table table-sm" 
              :key="orders['.key']" 
              v-for="(orders, index) in getOrders">
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
              <strong><em>Order Number: {{ index + 1 }}</em></strong>
              <button class="btn btn-outline-danger btn-sm"
                      @click="removeOrderItem(orders['.key'])">X</button>
            </div>
            <tr :key="orderItems" v-for="orderItems in orders['.value']">
              <td>{{ orderItems.name }}</td>
              <td>{{ orderItems.size }}</td>
              <td>{{ orderItems.quantity }}</td>
              <td>{{ orderItems.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
import { mapGetters } from 'vuex'
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig'

export default {
  components: {
    cnpNewPizza: NewPizza,
    cnpLogin: Login
  },
  computed: {
    ...mapGetters ([
      'numberOfOrders',
      'getMenuItems',
      'getOrders',
      'currentUser'
    ])
  },
  methods: {
    removeMenuItem(key) {
      dbMenuRef.child(key).remove()
    },
    removeOrderItem(key) {
      dbOrdersRef.child(key).remove()
    }
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