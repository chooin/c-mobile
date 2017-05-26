<template>
  <div class="c-flex-item"
    :style="{
      flex
    }"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cFlexItem',
  props: {
    flex: {
      type: Number,
      default: 1
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
  @import './style';
</style>
