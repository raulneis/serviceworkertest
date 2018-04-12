import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignIn from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/signin',
        name: 'signin',
        component: SignIn
    }, {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }
  ]
})
