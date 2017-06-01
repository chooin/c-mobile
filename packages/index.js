import './assets/scss/app.scss'
import Btn from './components/btn'
import { Flex, FlexItem } from './components/flex'
import Header from './components/header'
import Icon from './components/icon'
import {
  InputGroup,
  Input,
  InputHead,
  InputBody,
  InputUpload,
  InputUploadFile
} from './components/input-group'
import Switch from './components/switch'
import { Tab, TabItem } from './components/tab'
import { Tabbar, TabbarItem } from './components/tabbar'
// import Toast from './components/toast/main'

const components = [
  Btn,
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
  TabbarItem
]

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, {
  install
})
