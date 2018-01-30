export const OrderStore = {

  namespaced: true,

  state: {

    order: {}

  },

  mutations: {

    setOrder (order, orderData) {

      order = orderData;

    }

  }

}
