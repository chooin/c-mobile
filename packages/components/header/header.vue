<template>
  <div
    class="c-header"
    :class="[
      type ? 'c-header__' + type : '',
      {
        'c-header__noborder-bottom': noborderBottom || noborder
      }
    ]"
    :style="{
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    }">
    <span
      v-if="$slots.left"
      class="c-header__left">
      <slot name="left"></slot>
    </span>
    <span
      :class="{
        'c-header__back': _left.back
      }"
      :style="{
        color: _left.color,
        bottom: _left.back ? paddingBottom : null
      }"
      @click="onLeft"
      v-else-if="_left.text || _left.back"
      class="c-header__left">
      {{ _left.close ? '' : _left.text }}
    </span>
    <span class="c-header__close" v-if="_left.close" @click="onClose"><i></i></span>
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else-if="defaultTitle">{{ defaultTitle }}</template>
    <span
      v-if="$slots.right"
      class="c-header__right">
      <slot name="right"></slot>
    </span>
    <span
      class="c-header__right"
      :style="{
        color: _right.color
      }"
      @click="onRight"
      v-else-if="_right.text">
      {{ _right.text }}
    </span>
  </div>
</template>

<script>
import {
  isBrowser,
  to,
  Megalo
 } from '../../utils'

export default {
  name: 'cHeader',
  data () {
    return {
      defaultTitle: '',
      paddingTop: null,
      paddingRight: null,
      paddingBottom: null,
      paddingLeft: null
    }
  },
  props: {
    autoTitle: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    left: {
      type: Object,
      default: () => {}
    },
    right: {
      type: Object,
      default: () => {}
    },
    noborderBottom: {
      type: Boolean,
      default: false
    },
    noborder: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: null
    }
  },
  methods: {
    componentInit () {
      if (Megalo) {
        Megalo.getSystemInfo({
          success: getSystemInfo => {
            let menuButton = Megalo.getMenuButtonBoundingClientRect()

            this.paddingTop = `${menuButton.top}px`
            this.paddingRight = `${menuButton.width + (getSystemInfo.windowWidth - menuButton.right) * 2}px`
            this.paddingBottom = '9px'
            this.paddingLeft = `${menuButton.width + (getSystemInfo.windowWidth - menuButton.right) * 2}px`
          }
        })
      }
    },
    onLeft () {
      if (this._left.to) {
        to({
          vm: this,
          to: this._left.to
        })
      } else if (typeof this._left.click === 'function') {
        this._left.click()
      } else if (this._left.back) {
        to({
          vm: this,
          to: -1
        })
      }
    },
    onRight () {
      if (this._right.to) {
        to({
          vm: this,
          to: this._right.to
        })
      } else if (typeof this._right.click === 'function') {
        this._right.click()
      }
    },
    onClose () {
      if (typeof this._left.close === 'function') {
        this._left.close()
      }
    }
  },
  computed: {
    _left: {
      get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          back: false,
          close: null,
          click: null
        }, this.left)
      }
    },
    _right: {
      get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          click () {}
        }, this.right)
      }
    }
  },
  mounted () {
    if (this.autoTitle) {
      if (isBrowser) {
        this.$nextTick(() => {
          this.defaultTitle = document && document.title
        })
      }
    }
    this.componentInit()
  }
}
</script>
