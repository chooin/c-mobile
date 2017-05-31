import Vue from 'vue'
import Router from 'vue-router'

import Btn from '@/views/btn/index'
import Flex from '@/views/flex/index'
import Header from '@/views/header/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/btn',
      component: Btn
    },
    {
      path: '/flex',
      component: Flex
    },
    {
      path: '/header',
      component: Header
    }
  ]
})
