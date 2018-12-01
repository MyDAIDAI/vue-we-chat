import Vue from 'vue'
import Router from 'vue-router'

import Talk from '@/components/Talk'
import Public from '@/components/Public'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import Main from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/talk',
      children: [
        {
          path: 'talk',
          name: 'talk',
          component: Talk,
          meta: {
            requireAuth: false
          }
        },
        {
          path: '/public',
          name: 'public',
          component: Public,
          meta: {
            requireAuth: false
          }
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
          meta: {
            requireAuth: false
          }
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
