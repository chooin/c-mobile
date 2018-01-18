<template>
  <div class="c-loading" v-if="_value">
    <i class="c-loading__loading"></i>
  </div>
</template>

<script>
export default {
  name: 'cLoading',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>
