<template>
  <div class="c-tab"
    :class="[
      type ? type : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cTab',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
