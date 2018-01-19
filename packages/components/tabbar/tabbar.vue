<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar__${type}` : '',
      {
        'c-tabbar__is-iphonex': isIPhoneX
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
import { isIPhoneX } from '../../utils'
export default {
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isIPhoneX
    }
  }
}
</script>
