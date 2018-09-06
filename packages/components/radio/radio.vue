<template>
  <div
    class="c-radio"
    :class="{
      'c-radio__checked': parentValue === value
    }"
    @click="onClick">
    <i class="c-radio__core"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cRadio',
  props: {
    value: {}
  },
  methods: {
    onClick () {
      if (this.$parent.disabled) return
      this.$parent.onChange(this.value)
    }
  },
  computed: {
    parentValue: {
      get () {
        return this.$parent.value
      }
    }
  }
}
</script>
