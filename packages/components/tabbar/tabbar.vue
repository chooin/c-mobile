<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar__${type}` : '',
      {
        'c-tabbar__shadow': shadow
      }
    ]">
    <div class="c-tabbar__cell">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
