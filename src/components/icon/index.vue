<template>
  <i
    class="c-icon"
    :class="[
      `icon-${name}`,
      type
    ]"
    :style="{
      backgroundColor,
      fontSize: size,
      color
    }">
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
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
