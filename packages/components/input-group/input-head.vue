<template>
  <div
    class="c-input-head"
    :style="{
      'min-width': labelWidth
    }"
    @click="onClick">
    <span style="color: #f00" v-if="required">*</span>
    <slot></slot>
  </div>
</template>

<script>
import to from '../../utils/to'
import { isBrowser } from '../../utils/device'

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
    },
    required () {
      return this.$parent.required
    }
  }
}
</script>
