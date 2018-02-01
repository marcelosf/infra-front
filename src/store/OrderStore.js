export const OrderStore = {

  namespaced: true,

  state: {

    orders: [],

    order: null

  },

  mutations: {

    setOrders (orders, ordersData) {

      orders = ordersData;

    },

    setOrder (order, orderData) {

      order = orderData;

    }

  },

  getters: {

    status (state) {

      return state.order.status;

    }

  }

}
