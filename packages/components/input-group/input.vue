<template>
  <label class="c-input"
    :class="{
      'c-input-addon': addon,
      'c-input-next': next,
      'c-input-icon': icon,
      'c-input-checked': checked,
      'noborder-top': noborderTop
    }"
    @click="handleClick">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    addon: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object,
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
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

<style lang="scss">
  @import './input';
</style>
