import Vue from 'vue';
import Vuex from 'vuex';

import {UserStates} from './UserStates';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {

    user: UserStates

  }

});
