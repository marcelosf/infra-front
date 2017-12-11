import Vue from 'vue'
import Router from 'vue-router'

import {HomeRouters} from '@/components/home/home.route'
import {AuthenticationRouters} from '@/components/authentication/authentication.route'
import {UserRouters} from '@/components/user/user.route'

Vue.use(Router)

let routes = []

let registeredRoutes = routes.concat(

  HomeRouters,
  AuthenticationRouters,
  UserRouters

)

export default new Router({
  routes: registeredRoutes
})
