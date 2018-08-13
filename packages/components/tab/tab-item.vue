<template>
  <a
    class="c-tab-item"
    :class="{
      'c-tab__current': current
    }"
    @click="handleClick">
    <slot></slot>
  </a>
</template>

<script>
import { to } from '../../utils'

export default {
  name: 'cTabItem',
  props: {
    current: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      to({
        vm: this,
        to: this.to,
        replace: true
      })
    }
  }
}
</script>
