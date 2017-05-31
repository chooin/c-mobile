<template>
  <div class="c-input-group"
    :class="{
      'noborder': noborder,
      'noborder-top': noborderTop,
      'noborder-bottom': noborderBottom
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cInputGroup',
  props: {
    noborder: {
      type: Boolean,
      default: false
    },
    noborderTop: {
      type: Boolean,
      default: false
    },
    noborderBottom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import './input-group';
</style>
