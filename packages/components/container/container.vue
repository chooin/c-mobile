<template>
  <div
    ref="container"
    class="c-container"
    :class="[
      fixed ? 'c-container__fixed-' + fixed : '',
      {
        'c-container__safe-area': _safeArea
      }
    ]"
    :style="{
      backgroundColor,
      padding,
      zIndex: _zIndex
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
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    },
    padding: {
      type: String,
      default: null
    },
    zIndex: {
      type: Number,
      default: null
    }
  },
  beforeMount () {
    this.componentRemove()
  },
  mounted () {
    this.componentInit()
  },
  beforeUpdate () {
    this.componentRemove()
  },
  updated () {
    this.componentInit()
  },
  beforeDestroy () {
    this.componentRemove()
  },
  methods: {
    componentInit () {
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
          className = `c-container-cover__fixed-${this.fixed}__${this.$refs.container.firstChild.classList[0]}`
        }
        if (document.querySelectorAll(`.${className}`).length === 0) {
          this.element = document.createElement('div')
          this.element.className = className
          if (this.fixed === 'top') { // 悬浮在顶部
            let clientHeight = this.$refs.container.clientHeight
            clientHeight = Number.isNaN(clientHeight) ? 0 : parseInt(clientHeight)
            this.element.style.paddingTop = `${clientHeight}px`
            document.body.insertBefore(this.element, document.body.firstChild)
          } else if (this.fixed === 'bottom') { // 悬浮在底部
            this.$nextTick(() => {
              // let afterHeight = window.getComputedStyle(this.$refs.container, ':after').getPropertyValue('height').replace('px', '')
              // afterHeight = Number.isNaN(afterHeight) ? 0 : parseInt(afterHeight)
              if (this._safeArea) { // 有安全区域的时候
                this.element.classList.add('c-container-cover__fixed-bottom-safe-area')
                let paddingBottom = this.$refs.container.style.paddingBottom.replace('px', '')
                paddingBottom =  Number.isNaN(paddingBottom) ? 0 : parseInt(paddingBottom)
                this.$refs.container.style.paddingBottom = `${paddingBottom}px`
              }
              let clientHeight = this.$refs.container.clientHeight
              clientHeight = Number.isNaN(clientHeight) ? 0 : parseInt(clientHeight)
              this.element.style.paddingTop = `${clientHeight}px`
              if (!this.backgroundColor) { // 设置默认颜色
                this.$refs.container.style.backgroundColor = window.getComputedStyle(this.$refs.container.firstChild).backgroundColor
              }
              document.body.appendChild(this.element)
            })
          }
        }
      }
    },
    componentRemove () {
      if (
        this.fixed &&
        isBrowser
      ) {
        this.element && this.element.remove()
      }
    }
  },
  computed: {
    _zIndex () {
      if (this.fixed) {
        if (this.zIndex) {
          return this.zIndex
        } else {
          return 1000
        }
      } else {
        return this.zIndex
      }
    },
    _safeArea () {
      if (
        this.fixed === 'bottom' &&
        this.safeArea === null
      ) {
        return true
      } else {
        return this.safeArea
      }
    }
  }
}
</script>
