<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar__${type}` : '',
      {
        'c-tabbar__is-miniprogram-is-iphonex': isMiniProgramIsIPhoneX
      }
    ]">
    <div class="c-tabbar__cell">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { isMiniProgramIsIPhoneX } from '../../utils/device'

export default {
  name: 'cTabbar',
  data () {
    return {
      isMiniProgramIsIPhoneX
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
