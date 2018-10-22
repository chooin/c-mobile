<template>
  <button
    class="c-btn"
    type="type"
    :open-type="openType"
    :class="[
      type ? 'c-btn__' + type : '',
      {
        'c-btn__o': o,
        'c-btn__disabled': disabled,
        'c-btn__small': small,
        'c-btn__icon': icon,
        'c-btn__is-miniprogram': isMiniProgram,
        'c-btn__is-miniprogram-is-iphonex': isMiniProgramIsIPhoneX
      }
    ]"
    :style="{
      borderRadius
    }"
    @click="onClick">
    <span class="c-btn__text">
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
  name: 'CBtn',
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
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    icon: {
      type: Boolean,
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
  }
}
</script>
