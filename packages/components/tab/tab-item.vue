<template>
  <a
    href="javascript:;"
    class="c-tab-item"
    :class="{
      'c-tab__current': current
    }"
    @click="handleClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'cTabItem',
  props: {
    current: {
      type: Boolean,
      default: false
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
