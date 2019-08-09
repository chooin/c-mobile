<template>
  <div
    class="c-switch"
    :class="[
      type ? `c-switch__${type}` : '',
      {
        'c-switch__disabled': disabled,
        'c-switch__checked': _value,
        'c-switch__loading': disabled ? false : isLoading
      }
    ]"
    @click="onClick">
    <span class="c-switch__core"><i></i></span>
  </div>
</template>

<script>
import { isMiniProgram } from '../../utils/device'

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
    loading: {
      type: Boolean,
      default: false
    },
    beforeChange: Function
  },
  methods: {
    onClick () {
      if (this.disabled) return
      let value = !this._value
      if (this.loading) {
        this.isLoading = true
      }
      this.vibrateShort()
      if (this.beforeChange) {
        this.beforeChange(() => {
          this.$emit('input', value)
          this.$emit('change', value)
          this.isLoading = false
        })
      } else {
        this.$emit('input', value)
        this.$emit('change', value)
        this.isLoading = false
      }
    },
    vibrateShort () {
      if (isMiniProgram) {
        let Megalo = Megalo || false
        if (Megalo) {
          Megalo.vibrateShort()
        } else {
          /* eslint-disable */
          wx.vibrateShort()
          /* eslint-disable */
        }
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
