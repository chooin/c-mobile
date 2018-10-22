<template>
  <div
    ref="cContainer"
    class="c-container"
    :class="[
      fixed ? 'c-container__fixed-' + fixed : '',
      {
        'c-container__safe-area': safeArea
      }
    ]"
    :style="{
      backgroundColor
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { isBrowser } from '../../utils'

export default {
  name: 'cContainer',
  data () {
    return {
      element: null
    }
  },
  props: {
    fixed: {
      type: String,
      default: null // null, top, bottom
    },
    safeArea: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    }
  },
  mounted () {
    if (
      this.fixed &&
      isBrowser
    ) {
      let className = null
      if (
        this.$refs.cContainer &&
        this.$refs.cContainer.firstChild &&
        this.$refs.cContainer.firstChild.classList &&
        this.$refs.cContainer.firstChild.classList[0]
      ) {
        className = `c-container__fixed-${this.fixed}-cover__${this.$refs.cContainer.firstChild.classList[0]}`
      }
      if (document.querySelectorAll(`.${className}`).length === 0) {
        const clientHeight = this.$refs.cContainer.clientHeight
        this.element = document.createElement('div')
        this.element.className = className
        if (this.fixed === 'top') { // 悬浮在顶部
          this.element.style.height = `${clientHeight}px`
          document.body.insertBefore(this.element, document.body.firstChild)
        } else if (this.fixed === 'bottom') { // 悬浮在底部
          const afterHeight = window.getComputedStyle(this.$refs.cContainer, ':after').height.replace('px', '')
          this.element.style.height = `${parseInt(afterHeight) + parseInt(clientHeight)}px`
          document.body.appendChild(this.element)
        }
      }
    }
  },
  beforeDestroy () {
    this.element && this.element.remove()
  }
}
</script>
