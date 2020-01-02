<template>
  <div
    class="c-switch"
    :class="[
      type ? `c-switch__${type}` : '',
      {
        'c-switch__disabled': disabled,
        'c-switch__checked': _value,
        'c-switch__small': small,
        'c-switch__before-change-loading': _isLoading
      }
    ]"
    @click="onClick">
    <span class="c-switch__core"><i></i></span>
  </div>
</template>

<script>
import { Megalo } from '../../utils/device'

export default {
  name: 'cSwitch',
  data () {
    return {
      isLoading: false
    }
  },
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
    small: {
      type: Boolean,
      default: false
    },
    beforeChange: {
      type: [Function, Object]
    },
    beforeChangeLoading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      if (
        this.beforeChange &&
        this.beforeChangeLoading
      ) this.isLoading = true
      let value = !this._value
      Megalo && Megalo.vibrateShort()
      if (this.beforeChange) {
        if (typeof this.beforeChange === 'function') {
          this.beforeChange(() => {
            this.$emit('input', value)
            this.$emit('change', value)
            this.isLoading = false
          })
        } else if (
          typeof this.beforeChange === 'object' &&
          typeof this.beforeChange.beforeChange === 'function'
        ) {
          this.beforeChange.beforeChange(() => {
            this.$emit('input', value)
            this.$emit('change', value)
            this.isLoading = false
          }, this.beforeChange.data)
        }
      } else {
        this.$emit('input', value)
        this.$emit('change', value)
        this.isLoading = false
      }
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      }
    },
    _isLoading: {
      get () {
        if (this.disabled) {
          return false
        } else {
          return this.isLoading
        }
      }
    }
  }
}
</script>
