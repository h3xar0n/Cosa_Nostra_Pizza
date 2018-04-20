const state = {
  orders: []
}

const getters = {
  numberOfOrders: state => state.orders
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders)
}

const actions = {
  // None yet
}

export default {
  state,
  mutations,
  getters,
  actions
}