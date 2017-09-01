<template>
  <span
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      {
        'c-text__light': light
      }
    ]"
    :style="{
      fontFamily,
      display: block ? 'block' : 'inline-block'
    }"
    @click="handleClick">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
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
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>
