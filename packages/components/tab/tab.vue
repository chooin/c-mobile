<template>
  <div
    class="c-tab"
    :class="[
      type ? 'c-tab__' + type : ''
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
