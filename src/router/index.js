import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import Btn from '@/views/btn'
import Flex from '@/views/flex'
import Header from '@/views/header'
import Switch from '@/views/switch'
import InputGroup from '@/views/input-group'
import Icon from '@/views/icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
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
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/input-group',
      component: InputGroup
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
