<template>
  <i
    class="c-icon"
    :class="[
      `icon-${name}`,
      round ? 'round' : '',
      backgroundColor ? 'small' : '',
      type
    ]"
    :style="{
      width: size,
      height: size,
      fontSize: size,
      backgroundColor,
      color
    }"
    @click="handleClick">
  </i>
</template>

<script>
export default {
  name: 'cIcon',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // @import './style';
</style>
