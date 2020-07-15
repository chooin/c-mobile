import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import Button from '@/views/button'
import Flex from '@/views/flex'
import Header from '@/views/header'
import Switch from '@/views/switch'
import InputGroup from '@/views/input-group'
import Icon from '@/views/icon'
import Tab from '@/views/tab'
import Tabbar from '@/views/tabbar'
import Toast from '@/views/toast'
import Confirm from '@/views/confirm'
import Actionsheet from '@/views/actionsheet'
import Sidebar from '@/views/sidebar'
import Text from '@/views/text'
import Loading from '@/views/loading'
import Search from '@/views/search'
import keyboard from '@/views/keyboard'
import radio from '@/views/radio'
import container from '@/views/container'
import LoadMore from '@/views/load-more'
import WhiteSpace from '@/views/white-space'
import WingBlank from '@/views/wing-blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/button',
      component: Button
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
      path: '/tab',
      component: Tab
    },
    {
      path: '/tabbar',
      component: Tabbar
    },
    {
      path: '/toast',
      component: Toast
    },
    {
      path: '/confirm',
      component: Confirm
    },
    {
      path: '/actionsheet',
      component: Actionsheet
    },
    {
      path: '/sidebar',
      component: Sidebar
    },
    {
      path: '/text',
      component: Text
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/keyboard',
      component: keyboard
    },
    {
      path: '/radio',
      component: radio
    },
    {
      path: '/container',
      component: container
    },
    {
      path: '/load-more',
      component: LoadMore
    },
    {
      path: '/white-space',
      component: WhiteSpace
    },
    {
      path: '/wing-blank',
      component: WingBlank
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
