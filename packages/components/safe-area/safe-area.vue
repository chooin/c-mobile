<template>
  <div
    :style="{
      height: isMiniProgramIsIPhoneX ? `${height + 34}px` : `${height}px`
    }"
    class="c-safe-area">
  </div>
</template>

<script>
import {
  isMiniProgramIsIPhoneX
} from '../../utils/device'

export default {
  name: 'c-safe-area',
  data () {
    return {
      isMiniProgramIsIPhoneX
    }
  },
  props: {
    height: {
      type: Number,
      default: 0
    }
  }
}
</script>
