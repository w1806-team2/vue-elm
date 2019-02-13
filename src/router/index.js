import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homepage from '@/components/homepage'
import classify from '@/components/classify'
import cart from '@/components/cart'
import user from '@/components/user'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:"homepage"
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
