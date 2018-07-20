import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //@ => ..
import Test from '@/components/Test'  //@ => ..
import Header from '@/components/Header'  
import Outter from '@/components/Outter'  

import Login from '@/views/Login'  
import Register from '@/views/Register'  
import Production from '@/views/Production' 
import Server from '@/views/Server' 

Vue.use(Router)

export default new Router({   // module.expotrs = {}
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/outter',
      name: 'Outter',
      component: Outter,
      children:[
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/header',
      name: 'Header',
      alias: '/',    //起一个别名 
      component: Header,
      children:[
        {
          path: 'production',
          name: 'Production',
          alias: '',
          component: Production
        },
        {
          path: 'server',
          name: 'Server',
          component: Server
        }
      ]
    }
  ]
})
