<template>
  <div
    class="c-radio"
    :class="{
      'c-radio__checked': currentValue === value
    }"
    @click="onClick">
    <i class="c-radio__core"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cRadio',
  data () {
    return {
      parent: this.$parent
    }
  },
  props: {
    value: {}
  },
  created () {
    while (
      this.parent &&
      this.parent.$options &&
      this.parent.$options.name &&
      this.parent.$options.name !== 'cRadioGroup'
    ) {
      this.parent = this.parent.$parent
    }
  },
  methods: {
    onClick () {
      if (this.parent.disabled) return
      this.parent.onChange(this.value)
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.parent.value
      }
    }
  }
}
</script>
