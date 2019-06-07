<template>
  <cover-view
    v-if="coverView"
    class="c-flex-item"
    :style="{
      flex,
      margin: `0 ${gutter / 2}px`
    }"
    @click="onClick">
    <slot></slot>
  </cover-view>
  <div
    v-else
    class="c-flex-item"
    :style="{
      flex,
      margin: `0 ${gutter / 2}px`
    }"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import to from '../../utils/to'

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
    onClick () {
      to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    gutter: {
      get () {
        return this.$parent.gutter || 0
      }
    },
    coverView: {
      get () {
        return this.$parent.coverView || false
      }
    }
  }
}
</script>
