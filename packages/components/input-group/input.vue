<template>
  <div
    v-if="useDiv"
    class="c-input"
    :class="[{
      'c-input__addon': addon,
      'c-input__next': next,
      'c-input__icon': icon,
      'c-input__checked': checked,
      'c-input__noborder-top': noborderTop
    }]"
    @touchstart="() => {}"
    @click="onClick">
    <slot></slot>
  </div>
  <button
    v-else-if="openType"
    class="c-input"
    :open-type="openType"
    :class="[{
      'c-input__addon': addon,
      'c-input__next': next,
      'c-input__icon': icon,
      'c-input__checked': checked,
      'c-input__noborder-top': noborderTop
    }]"
    @click="onClick">
    <slot></slot>
  </button>
  <label
    v-else
    class="c-input"
    :class="[{
      'c-input__addon': addon,
      'c-input__next': next,
      'c-input__icon': icon,
      'c-input__checked': checked,
      'c-input__noborder-top': noborderTop
    }]"
    @touchstart="() => {}"
    @click="onClick">
    <slot></slot>
  </label>
</template>

<script>
import { to } from '../../utils'

export default {
  name: 'cInput',
  props: {
    addon: {
      type: Boolean,
      default: false
    },
    useDiv: { // switch 组件父级是不允许使用 label 标签的
      type: Boolean,
      default: false
    },
    openType: { // 仅小程序支持
      type: String,
      default: null
    },
    next: {
      type: Boolean,
      default: null
    },
    icon: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if (this.next === false) return
      to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    labelWidth () {
      return this.$parent.labelWidth
    }
  }
}
</script>
