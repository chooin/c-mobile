<template>
  <div
    ref="container"
    class="c-container"
    :class="[
      fixed ? 'c-container__fixed-' + fixed : '',
      {
        'c-container__safe-area':
          safeArea !== false ||
          typeof safeArea === 'number'
      }
    ]"
    :style="{
      backgroundColor,
      zIndex
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
      type: [Boolean, Number],
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    },
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  mounted () {
    if (
      this.fixed &&
      isBrowser
    ) {
      let className = null
      if (
        this.$refs.container &&
        this.$refs.container.firstChild &&
        this.$refs.container.firstChild.classList &&
        this.$refs.container.firstChild.classList[0]
      ) {
        className = `c-container__fixed-${this.fixed}-cover__${this.$refs.container.firstChild.classList[0]}`
      }
      if (document.querySelectorAll(`.${className}`).length === 0) {
        const clientHeight = this.$refs.container.clientHeight || 0
        this.element = document.createElement('div')
        this.element.className = className
        if (this.fixed === 'top') { // 悬浮在顶部
          this.element.style.height = `${clientHeight}px`
          document.body.insertBefore(this.element, document.body.firstChild)
        } else if (this.fixed === 'bottom') { // 悬浮在底部
          setTimeout(() => { // 解决 window.getComputedStyle() 在 safe area 下获取伪元素高度可能为 0
            if (window.getComputedStyle) {
              let afterHeight = window.getComputedStyle(this.$refs.container, ':after').getPropertyValue('height').replace('px', '')
              afterHeight = isNaN(afterHeight) ? 0 : afterHeight
              this.element.style.height = `${parseInt(afterHeight) + parseInt(clientHeight)}px`
              if (!this.backgroundColor) { // 设置默认颜色
                this.$refs.container.style.backgroundColor = window.getComputedStyle(this.$refs.container.firstChild).backgroundColor
              }
              document.body.appendChild(this.element)
            } else {
              console.warn('[Tip]: Browsers don\'t support window.getComputedStyle methods')
            }
          }, 100)
        }
      }
    }
    if (
      this.safeArea !== false &&
      typeof this.safeArea === 'number'
    ) { // 安全区最低高度，不是异性屏也会受其影响
      if (window.getComputedStyle) {
        setTimeout(() => { // 解决 window.getComputedStyle() 在 safe area 下获取伪元素高度可能为 0
          let afterHeight = window.getComputedStyle(this.$refs.container, ':after').getPropertyValue('height').replace('px', '')
          afterHeight = isNaN(afterHeight) ? 0 : afterHeight
          if (afterHeight < this.safeArea) {
            this.$refs.container.style.marginBottom = `${this.safeArea - afterHeight}px`
          }
        }, 100)
      } else {
        console.warn('[Tip]: Browsers don\'t support window.getComputedStyle methods')
      }
    }
  },
  beforeDestroy () {
    if (
      this.fixed &&
      isBrowser
    ) {
      this.element && this.element.remove()
    }
  }
}
</script>
