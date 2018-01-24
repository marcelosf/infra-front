import Vue from 'vue';
import Vuex from 'vuex';

import {UserStates} from './UserStates';
import {ServiceStore} from './ServiceStore';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {

    user: UserStates,
    service: ServiceStore

  }

});
