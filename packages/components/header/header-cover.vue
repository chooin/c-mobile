<template>
  <div
    class="c-header-cover"
    :style="{
      height
    }"></div>
</template>

<script>
import {
  Megalo
} from '../../utils'

export default {
  data () {
    return {
      height: 0
    }
  },
  props: {
    contentHeight: {
      type: Number,
      default: 0
    },
  },
  methods: {
    componentInit () {
      if (Megalo) {
        let menuButton = Megalo.getMenuButtonBoundingClientRect()

        this.height = `${menuButton.top + this.contentHeight + 9}px`
      }
    }
  },
  mounted () {
    this.componentInit()
  }
}
</script>