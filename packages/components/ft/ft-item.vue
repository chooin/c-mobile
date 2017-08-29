<template>
  <div
    class="c-ft-item"
    :style="{
      width: `${width * 100}%`
    }"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cFtItem',
  props: {
    width: {
      type: Number,
      default: 1
    },
    to: {
      type: [String, Object],
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
