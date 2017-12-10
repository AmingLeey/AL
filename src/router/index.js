import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Adduser from '@/components/Adduser'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/index',
      name: 'index',
      component: Index
    },{
      path: '/adduser',
      name: 'adduser',
      component: Adduser
    },{
      path: '/search',
      name: 'search',
      component: Search
    },{
        path: '**',
        name: 'error',
        component: Error
      }
  ]
})
