<template>
  <div
    class="c-switch"
    :class="[
      type ? 'c-switch__' + type : '',
      {
        'c-switch__disabled': disabled,
        'c-switch__checked': _value
      }
    ]"
    @click="onClick">
    <span class="c-switch__core"></span>
  </div>
</template>

<script>
export default {
  name: 'cSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeChange: Function
  },
  methods: {
    onClick () {
      if (this.disabled) return
      let value = !this.value
      if (this.beforeChange) {
        this.beforeChange(() => {
          this.$emit('input', value)
          this.$emit('change', value)
        })
      } else {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      }
    }
  }
}
</script>
