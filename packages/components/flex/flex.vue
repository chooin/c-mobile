<template>
  <div class="c-flex" :style="{
    padding: `0 ${gutter / 2}px`
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cFlex',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  }
}
</script>
