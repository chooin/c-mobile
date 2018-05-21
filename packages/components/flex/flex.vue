<template>
  <div
    class="c-flex"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../utils'

export default {
  name: 'cFlex',
  props: {
    gutter: {
      type: Number,
      default: 0
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
        to: this.to
      })
    }
  }
}
</script>
