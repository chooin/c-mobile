<template>
  <div
    class="c-header"
    :class="[
      type ? `c-header__${type}` : '',
      {
        'noborder-bottom': noborderBottom
      }
    ]">
    <span
      class="c-header__left"
      :class="{
        back: _left.back
      }"
      :style="{
        color: _left.color
      }"
      @click="handleLeftClick"
      v-if="_left.text || _left.back">
      {{ _left.text }}
    </span>
    <h1 v-if="title || defaultTitle">
      {{ title === undefined || title === null ? defaultTitle : title }}
    </h1>
    <span
      class="c-header__right"
      :style="{
        color: _right.color
      }"
      @click="handleRightClick"
      v-if="_right.text">
      {{ _right.text }}
    </span>
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../utils'
export default {
  name: 'cHeader',
  data () {
    return {
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
    }
  },
  methods: {
    handleLeftClick () {
      if (this._left.to) {
        to(this, this._left)
      } else if (typeof this._left.click === 'function') {
        this._left.click()
      } else if (this._left.back) {
        this.$router.go(-1)
      }
    },
    handleRightClick () {
      if (this._right.to) {
        to(this, this._right)
      } else if (typeof this._right.click === 'function') {
        this._right.click()
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
  }
}
</script>
