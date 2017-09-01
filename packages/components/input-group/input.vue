<template>
  <div
    v-if="useDiv"
    class="c-input"
    :class="[{
      'c-input__addon': addon,
      'c-input__next': next,
      'c-input__icon': icon,
      'c-input__checked': checked,
      'noborder-top': noborderTop
    }]"
    @click="handleClick">
    <slot></slot>
  </div>
  <label
    v-else
    class="c-input"
    :class="[{
      'c-input__addon': addon,
      'c-input__next': next,
      'c-input__icon': icon,
      'c-input__checked': checked,
      'noborder-top': noborderTop
    }]"
    @click="handleClick">
    <slot></slot>
  </label>
</template>

<script>
import { to } from '../../units'
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
    next: {
      type: Boolean,
      default: false
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
    handleClick () {
      to(this)
    }
  }
}
</script>
