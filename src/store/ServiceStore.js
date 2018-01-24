export const ServiceStore = {

  namespaced: true,

  state: {

    service: {}

  },

  mutations: {

    setService (service, serviceData) {

      service = serviceData;

    }

  }

}
