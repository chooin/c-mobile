<template>
  <cover-view
    v-if="_coverView"
    @click="onClick"
    :open-type="openType"
    :form-type="formType"
    :class="[
      type ? `c-button__${type}` : '',
      icon ? `c-button__icon-${icon}` : '',
      {
        'c-button__o': o,
        'c-button__disabled': _disabled,
        'c-button__small': small,
        'c-button__loading': loading
      }
    ]"
    :style="{
      borderRadius: _borderRadius
    }"
    hover-class="c-button-hover"
    class="c-button">
    <cover-view class="c-button__text">
      <slot></slot>
    </cover-view>
  </cover-view>
  <button
    v-else
    @click="onClick"
    @getphonenumber="onGetphonenumber"
    :open-type="openType"
    :form-type="formType"
    :class="[
      type ? `c-button__${type}` : '',
      icon ? `c-button__icon-${icon}` : '',
      {
        'c-button__o': o,
        'c-button__disabled': _disabled,
        'c-button__small': small,
        'c-button__loading': loading
      }
    ]"
    :style="{
      borderRadius: _borderRadius
    }"
    hover-class="c-button-hover"
    class="c-button">
    <span class="c-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import to from '../../utils/to'

export default {
  name: 'CButton',
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
    small: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: Number,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    icon: {
      type: [Boolean, String],
      default: false
    },
    openType: { // 仅小程序支持
      type: String,
      default: null
    },
    formType: { // 仅小程序支持
      type: String,
      default: null
    },
    coverView: { // 仅小程序支持
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if (this._disabled) return
      to({
        vm: this,
        to: this.to
      })
    },
    onGetphonenumber (v) {
      this.$emit('getphonenumber', v)
    }
  },
  mounted () {
    /* eslint-disable */
    if (this._coverView && this.loading) console.warn('c-button cover-view 状态不支持 loading')
    /* eslint-disable */
  },
  computed: {
    _borderRadius () {
      return this.borderRadius === null ? this.borderRadius : `${this.borderRadius}px`
    },
    _icon () {
      if (typeof this.icon === 'boolean' && this.icon) {
        return 'left'
      } else {
        if (this.icon) {
          return this.icon
        } else {
          return false
        }
      }
    },
    _disabled () {
      return this.disabled || this.loading
    },
    _coverView: {
      get () {
        return this.coverView || this.$parent.coverView || false
      }
    }
  }
}
</script>
