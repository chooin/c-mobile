<template>
  <div
    class="c-input-head"
    :style="{
      minWidth: labelWidth
    }"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { to, device } from '../../utils'

export default {
  name: 'cInputHead',
  props: {
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    onClick () {
      to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    labelWidth () {
      if (device.isBrowser) {
        return this.$parent.labelWidth
      } else {
        return '110px'
      }
    }
  }
}
</script>
