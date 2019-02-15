<template>
  <div
    class="c-tab-item"
    :class="{
      'c-tab__current': current
    }"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import to from '../../utils/to'

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
    onClick () {
      to({
        vm: this,
        to: this.to,
        replace: true
      })
    }
  }
}
</script>
