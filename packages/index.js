import Button from '../packages/components/button'
import { Flex, FlexItem } from '../packages/components/flex'
import Header from '../packages/components/header'
import Icon from '../packages/components/icon'
import {
  InputGroup,
  Input,
  InputHead,
  InputBody,
  InputUpload,
  InputUploadFile
} from '../packages/components/input-group'
import Switch from '../packages/components/switch'
import { Tab, TabItem } from '../packages/components/tab'
import { Tabbar, TabbarItem } from '../packages/components/tabbar'
import Text from '../packages/components/text'
import Actionsheet from '../packages/components/actionsheet'
import Sidebar from '../packages/components/sidebar'
import Search from '../packages/components/search'
import Keyboard from '../packages/components/keyboard'
import {
 Radio,
 RadioGroup
} from '../packages/components/radio'
import Container from '../packages/components/container'

import Toast from '../packages/components/toast'
import Confirm from '../packages/components/confirm'
import Loading from '../packages/components/loading'

const components = [
  Button,
  Flex,
  FlexItem,
  Header,
  Icon,
  InputGroup,
  Input,
  InputHead,
  InputBody,
  InputUpload,
  InputUploadFile,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Text,
  Actionsheet,
  Sidebar,
  Search,
  Keyboard,
  Radio,
  RadioGroup,
  Container
]

const install = Vue => {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$Toast = Toast
  Vue.prototype.$Confirm = Confirm
  Vue.prototype.$Loading = Loading
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, {
  install
})
