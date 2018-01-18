import Btn from './components/btn'
import { Flex, FlexItem } from './components/flex'
import { Ft, FtItem } from './components/ft'
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
import Text from './components/text'
import Toast from './components/toast'
import Confirm from './components/confirm'
import Actionsheet from './components/actionsheet'
import Sidebar from './components/sidebar'
import Loading from './components/loading'

const components = [
  Btn,
  Flex,
  FlexItem,
  Ft,
  FtItem,
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
  Loading
]

const install = (Vue, opts = {}) => {
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
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, {
  install
})
