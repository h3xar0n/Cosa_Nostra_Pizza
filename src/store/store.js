import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menuItems: {
      1: {
        'name': 'Omerta',
        'description': 'A delicious tomato based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 6.95
        }, {
          'size': 12,
          'price': 10.95
        }]
      },
      2: {
        'name': 'Poor Impulse Control',
        'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      },
      3: {
        'name': 'Pearly Gates',
        'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      }
    }
  }
})