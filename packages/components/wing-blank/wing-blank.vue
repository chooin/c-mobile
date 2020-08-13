<template>
  <div
    class="c-wing-blank"
    :style="{
      padding: `0 ${size}px`
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-wing-blank',
  props: {
    size: {
      type: Number,
      default: 0
    }
  }
}
</script>
