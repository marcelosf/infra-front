import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Authentication from '@/components/authentication/Authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/authentication',
      name: 'Authentication',
      component: Authentication
    }

  ]
})
