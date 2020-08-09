<template>
  <div
    v-if="useDiv && visible"
    class="c-input"
    :class="[
      className,
      {
        'c-input__addon': addon,
        'c-input__next': next,
        'c-input__active': active,
        'c-input__icon': icon,
        'c-input__checked': checked,
        'c-input__noborder-top': noborderTop,
        'c-input__direction-column': direction === 'column'
      }
    ]"
    @touchstart="() => {}"
    @click="onClick">
    <slot></slot>
  </div>
  <button
    v-else-if="_useButton && visible"
    class="c-input"
    :open-type="openType"
    :class="[
      className,
      {
        'c-input__addon': addon,
        'c-input__next': next,
        'c-input__active': active,
        'c-input__icon': icon,
        'c-input__checked': checked,
        'c-input__noborder-top': noborderTop,
        'c-input__direction-column': direction === 'column'
      }
    ]"
    @click="onClick">
    <slot></slot>
  </button>
  <label
    v-else-if="visible"
    class="c-input"
    :class="[
      className,
      {
        'c-input__addon': addon,
        'c-input__next': next,
        'c-input__active': active,
        'c-input__icon': icon,
        'c-input__checked': checked,
        'c-input__noborder-top': noborderTop,
        'c-input__direction-column': direction === 'column'
      }
    ]"
    @touchstart="() => {}"
    @click="onClick">
    <slot></slot>
  </label>
</template>

<script>
import to from '../../utils/to'

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
    useButton: { // 仅小程序支持
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
    },
    className: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'row' // ? row, column
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
    },
    _useButton () {
      if (this.useButton) return true
      if (this.openType) return true
      return false
    }
  }
}
</script>
