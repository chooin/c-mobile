<template>
  <div
    :style="{
      height: `${height}px`
    }"
    class="c-safe-area">
  </div>
</template>

<script>
export default {
  name: 'cSafeArea',
  props: {
    height: {
      type: Number,
      default: 0
    }
  }
}
</script>
