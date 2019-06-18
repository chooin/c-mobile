<template>
  <cover-view
    v-if="coverView"
    :class="[
      className
    ]"
    class="c-flex"
    @click="onClick">
    <slot></slot>
  </cover-view>
  <div
    v-else
    :class="[
      className
    ]"
    class="c-flex"
    @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import to from '../../utils/to'

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
    },
    coverView: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
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
