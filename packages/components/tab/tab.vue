<template>
  <div
    class="c-tab"
    :class="[
      type ? 'c-tab__' + type : '',
      {
        'c-tab__suspend': suspend
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
import { getObjectType, device } from '../../utils'

export default {
  name: 'cTab',
  props: {
    type: {
      type: String,
      default: ''
    },
    suspend: {
      type: Boolean,
      default: false
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-tab__suspend__cover').length === 0) {
          this.div = document.createElement('div')
          this.div.className = 'c-tab__suspend__cover'
          if (getObjectType(this.cover) === 'Number') {
            this.div.style.height = `${this.cover}px`
          } else if (getObjectType(this.cover) === 'String') {
            this.div.style.height = this.cover
          }
          document.body.insertBefore(this.div, document.body.firstChild)
        }
      }
    }
  },
  beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove()
  }
}
</script>
