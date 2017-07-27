<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar__${type}` : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
