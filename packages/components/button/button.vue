<template>
  <button
    class="c-button"
    type="type"
    :open-type="openType"
    :class="[
      type ? 'c-button__' + type : '',
      icon ? 'c-button__icon-' + icon : '',
      {
        'c-button__o': o,
        'c-button__disabled': disabled,
        'c-button__small': small,
        'c-button__is-miniprogram': isMiniProgram,
        'c-button__is-miniprogram-is-iphonex': isMiniProgramIsIPhoneX
      }
    ]"
    :style="{
      borderRadius: _borderRadius
    }"
    @click="onClick">
    <span class="c-button__text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
import {
  to,
  isMiniProgram,
  isMiniProgramIsIPhoneX
} from '../../utils'

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
    text: { // mpvue 对 slot 支持不好！
      type: String,
      default: ''
    },
    openType: { // 仅小程序支持
      type: String,
      default: null
    }
  },
  data () {
    return {
      isMiniProgram,
      isMiniProgramIsIPhoneX
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    _borderRadius () {
      return this.borderRadius === null ? this.borderRadius : `${this.borderRadius}px`
    },
    _icon () {
      if (
        typeof this.icon === 'boolean' &&
        this.icon === true
      ) {
        return 'left'
      } else {
        if (this.icon) {
          return this.icon
        } else {
          return false
        }
      }
    }
  }
}
</script>
