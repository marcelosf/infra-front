import Vue from 'vue';
import Vuex from 'vuex';

import {UserStates} from './UserStates';
import {ServiceStore} from './ServiceStore';
import {OrderStore} from './OrderStore';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {

    user: UserStates,
    service: ServiceStore,
    order: OrderStore

  }

});
