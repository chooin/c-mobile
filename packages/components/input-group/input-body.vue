<template>
  <div class="c-input-body" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import to from '../../utils/to'

export default {
  name: 'cInputBody',
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
