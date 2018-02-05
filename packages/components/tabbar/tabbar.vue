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
    },
    cover: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isIPhoneX,
      div: null
    }
  },
  created () {
    if (
      this.cover &&
      document.querySelectorAll('.c-tabbar__cover').length === 0
    ) {
      this.div = document.createElement('div')
      this.div.style.width = '100%'
      this.div.style.height = this.isIPhoneX ? '8.4rem' : '5rem'
      this.div.className = 'c-tabbar__cover'
      document.body.appendChild(this.div)
    }
  },
  beforeDestroy () {
    this.div && this.div.remove()
  }
}
</script>
