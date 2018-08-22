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
      if (this.beforeChange) {
        this.beforeChange(() => {
          this.$emit('input', !this.value)
        })
      } else {
        this.$emit('input', !this.value)
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
