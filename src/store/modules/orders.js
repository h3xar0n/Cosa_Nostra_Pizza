const state = {
  orders: []
}

const getters = {
  numberOfOrders: state => state.orders
}

const mutations = {

}

const actions = {
  addOrder: (state, orders) => state.orders.push(orders)

}

export default {
  state,
  mutations,
  getters,
  actions
}