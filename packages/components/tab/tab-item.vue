<template>
  <a
    href="javascript:;"
    class="c-tab-item"
    :class="{
      'c-tab-current': current
    }"
    @click="handleClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'cTabItem',
  props: {
    current: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object,
      default: null
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
