export const UserStates = {

  state: {

    user: {}

  },

  mutations: {

    setUser (user, userData) {

      user = userData;

    }

  },

  getters: {

    userName (state) {

      return state.user.filter(user => user.name);

    }

  }

};

