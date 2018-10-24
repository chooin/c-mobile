<template>
  <div
    class="c-input-head"
    :style="{
      'min-width': labelWidth
    }"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { to, isBrowser } from '../../utils'

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
      if (isBrowser) {
        return this.$parent.labelWidth
      } else {
        return '110px'
      }
    }
  }
}
</script>
