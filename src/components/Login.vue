<template>
  <div class="row">
    <div>
      <div>
        <p v-if="currentUser">Logged in as: <br> {{ currentUser }}</p>
        <p v-else>Are you a friend of the Family?</p>
      </div>

      <form>
        <div class="form-group">
          <label for="name">Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="name">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <div class="row">
          <button type="button" 
                  class="btn btn-primary" 
                  @click.prevent="signIn">Sign in</button>
          <button type="button" 
                  class="btn btn-danger"
                  @click.prevent="signOut">Sign out</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    store.dispatch('setUser', user) 
  } else {
    store.dispatch('setUser', null)
  }
});

export default {
  methods: {
    signIn() {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password')
        } else {
          alert(errorMessage)
        }
      })
    },
    signOut() {
      Firebase.auth().signOut().then(function() {
        alert('logged out');
      }).catch(function(error){
        alert(errorMessage);
      })
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}
</script>