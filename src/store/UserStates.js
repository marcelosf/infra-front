export const UserStates = {

  namespaced: true,

  state: {

    user: {}

  },

  mutations: {

    setUser (user, userData) {

      user = userData;

    }

  },

  getters: {

    username (state) {

      return state.user.filter(user => user.name);

    }

  }

};

