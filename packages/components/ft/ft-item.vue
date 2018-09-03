<template>
  <div
    class="c-ft-item"
    :style="{
      width: `${width * 100}%`
    }"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../utils'

export default {
  name: 'cFtItem',
  props: {
    width: {
      type: Number,
      default: 1
    },
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
  }
}
</script>
