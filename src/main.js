// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import {store} from '@/store/Store';

import App from './App'
import router from './router'

const THEME = {

  theme: {

    primary: '#00BCD4',

    secondary: '#006064'

  }

};

Vue.use(Vuetify, THEME)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
