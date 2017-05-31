<template>
  <div class="c-header"
    :class="[
      type ? type : ''
    ]">
    <a
      href="javascript:;"
      class="left"
      :class="{
        back: _left.back
      }"
      :style="{
        color: _left.color
      }"
      @click="handleLeftClick"
      v-if="_left.text || _left.back">
      {{ _left.text }}
    </a>
    <h1 v-if="title || defaultTitle">{{ title === undefined || title === null ? defaultTitle : title }}</h1>
    <a
      href="javascript:;"
      class="right"
      :style="{
        color: _right.color
      }"
      @click="handleRightClick"
      v-if="_right.text">
      {{ _right.text }}
    </a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cHeader',
  data () {
    return {
      defaultTitle: '..'
    }
  },
  props: {
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
    }
  },
  methods: {
    handleLeftClick () {
      if (this._left.to) {
        this.$router.push(this._left.to)
      } else if (typeof this._left.click === 'function') {
        this._left.click()
      } else if (this._left.back) {
        this.$router.go(-1)
      }
    },
    handleRightClick () {
      if (this._right.to) {
        this.$router.push(this._right.to)
      } else {
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
    document.querySelector('title').addEventListener('DOMNodeInserted', () => {
      this._title = document.title
    })
  },
  beforeDestory () {
    document.querySelector('title').removeEventListener('DOMNodeInserted', () => {
      this._title = document.title
    })
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
