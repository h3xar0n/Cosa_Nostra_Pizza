<template>
  <div class="container">
    <cnp-admin-hidden v-if="currentUser"></cnp-admin-hidden>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <cnp-login></cnp-login>
      </div>
    </div>
  </div>
</template>

<style>
  .order-number {
    margin: 10px 0;
  }
  h3, label, em {
    color: #eee;
  }
  .form-control {
    background-color: #aaddf7
  }
</style>


<script>
import Login from './Login.vue'
import { mapGetters } from 'vuex'

//dynamic import
const AdminHidden = () => import('./AdminHidden.vue')

export default {
  components: {
    cnpLogin: Login,
    cnpAdminHidden: AdminHidden
  },
  computed: {
    ...mapGetters ([
      'currentUser'
    ])
  }
}
</script>