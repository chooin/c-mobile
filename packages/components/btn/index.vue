<template>
  <div
    :class="[
      type ? `c-btn-${type}` : '',
      o ? 'c-btn-o' : 'c-btn',
      {
        'c-btn-disabled': disabled,
        'c-btn-suspend': suspend,
        'c-btn-small': small
      }
    ]"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cBtn',
  props: {
    type: {
      type: String,
      default: ''
    },
    o: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    suspend: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object,
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
  @import './style';
</style>
