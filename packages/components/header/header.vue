<template>
  <div
    class="c-header"
    :class="[
      type ? 'c-header__' + type : '',
      {
        'c-header__suspend': suspend,
        'c-header__noborder-bottom': noborderBottom
      }
    ]">
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
        color: _left.color
      }"
      @click="leftClick"
      v-else-if="_left.text || _left.back"
      class="c-header__left">
      {{ _left.close ? '' : _left.text }}
    </span>
    <span class="c-header__close" v-if="_left.close" @click="closeClick"><i></i></span>
    <h1 v-if="$slots.title">
      <slot name="title"></slot>
    </h1>
    <h1 v-else-if="title || defaultTitle">
      {{ title === undefined || title === null ? defaultTitle : title }}
    </h1>
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
      @click="rightClick"
      v-else-if="_right.text">
      {{ _right.text }}
    </span>
  </div>
</template>

<script>
import { to, getObjectType, device } from '../../utils'

export default {
  name: 'cHeader',
  data () {
    return {
      div: null,
      defaultTitle: ''
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
    title: {
      type: String,
      default: null
    },
    right: {
      type: Object,
      default: () => {}
    },
    noborderBottom: {
      type: Boolean,
      default: false
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
  methods: {
    leftClick () {
      if (this._left.to) {
        to({
          vm: this,
          to: this._left.to
        })
      } else if (typeof this._left.click === 'function') {
        this._left.click()
      } else if (this._left.back) {
        this.$router.go(-1)
      }
    },
    rightClick () {
      if (this._right.to) {
        to({
          vm: this,
          to: this._right.to
        })
      } else if (typeof this._right.click === 'function') {
        this._right.click()
      }
    },
    closeClick () {
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
  created () {
    if (this.autoTitle) {
      this.$nextTick(() => {
        this.defaultTitle = document.title
      })
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-header__suspend__cover').length === 0) {
          this.div = document.createElement('div')
          this.div.className = 'c-header__suspend__cover'
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
