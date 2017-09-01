<template>
  <div
    class="c-flex-item"
    :style="{
      flex,
      margin: `0 ${gutter / 2}px`
    }"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../units'
export default {
  name: 'cFlexItem',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      to(this)
    }
  },
  computed: {
    gutter: {
      get () {
        return this.$parent.gutter || 0
      }
    }
  }
}
</script>
