<template>
  <div
    @touchstart.stop.prevent="onClick"
    @touchmove="onBlur"
    @touchend="onBlur"
    @touchcancel="onBlur"
    @mousedown="onClick"
    @mouseup="onBlur"
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
  name: 'cKeyboardKey',
  props: {
    text: [String, Number]
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    onClick () {
      if (this.text === '') return
      this.active = true
      this.$emit('click', this.text)
    },
    onBlur () {
      this.active = false
    }
  }
}
</script>