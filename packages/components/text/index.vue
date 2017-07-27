<template>
  <div
    class="c-text"
    :class="[
      type ? `c-text__${type}` : ''
    ]"
    @click="handleClick">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  name: 'cText',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    to: {
      default: null
    }
  },
  methods: {
    handleClick () {
      if (this.disabled === true) return
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // @import './style';
</style>
