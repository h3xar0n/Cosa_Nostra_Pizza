import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
     selector: to.hash
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
