<template>
  <div
    class="c-white-space"
    :style="{
      height: `${size}px`
    }"></div>
</template>

<script>
export default {
  name: 'c-white-space',
  props: {
    size: {
      type: Number,
      default: 0
    }
  }
}
</script>
