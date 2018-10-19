<template>
  <div
    class="c-btn__suspend__cover"
    :class="{
      'c-btn__is-miniprogram': isMiniProgram,
      'c-btn__is-miniprogram-is-iphonex': isMiniProgramIsIPhoneX
    }">
  </div>
</template>

<script>
import {
  isMiniProgram,
  isMiniProgramIsIPhoneX
} from '../../utils'

export default {
  data () {
    return {
      isMiniProgram,
      isMiniProgramIsIPhoneX
    }
  }
}
</script>
