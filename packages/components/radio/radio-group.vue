<template>
  <div
    class="c-radio-group"
    :class="[
      `c-radio-group__${align}`,
      type ? `c-radio-group__${type}` : '',
      {
        'c-radio-group__disabled': disabled
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cRadioGroup',
  props: {
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {}
  },
  methods: {
    onChange (v) {
      this.$emit('input', v)
      this.$emit('change', v)
    }
  }
}
</script>
