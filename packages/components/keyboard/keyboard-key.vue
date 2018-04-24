<template>
  <div
    @touchstart.stop.prevent="handleClick"
    @touchmove="handleBlur"
    @touchend="handleBlur"
    @touchcancel="handleBlur"
    @mousedown="handleClick"
    @mouseup="handleBlur"
    class="c-keyboard__key"
    :class="{
      'c-keyboard__key-active': active,
      'c-keyboard__key-empty': text === ''
    }">
    {{ text }}
    <i class="c-keyboard__border"></i>
  </div>
</template>

<script>
export default {
  name: 'c-keyboard-key',
  props: {
    text: [String, Number]
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      if (this.text === '') return
      this.active = true
      this.$emit('click', this.text)
    },
    handleBlur () {
      this.active = false
    }
  }
}
</script>