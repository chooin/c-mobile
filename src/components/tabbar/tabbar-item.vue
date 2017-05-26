<template>
  <a class="c-tabbar-item"
    :class="{
      current
    }"
    @click="handleClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'cTabbarItem',
  props: {
    to: {
      type: Object,
      default: null
    },
    current: {
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

<style scope lang="scss">
  @import './style';
</style>
