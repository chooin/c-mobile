<template>
  <div class="c-input-head" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../utils'

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
  }
}
</script>
