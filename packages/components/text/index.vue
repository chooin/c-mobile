<template>
  <a
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      {
        'c-text__light': light,
        'c-text__block': block
      }
    ]"
    :style="{
      fontFamily
    }"
    @click="handleClick">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
import { to } from '../../units'
export default {
  name: 'cText',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    fontFamily: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      to(this)
    }
  }
}
</script>
