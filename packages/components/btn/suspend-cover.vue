<template>
  <div
    class="c-btn__suspend__cover"
    :class="{
      'c-btn__is-miniprogram': device.isMiniProgram,
      'c-btn__is-miniprogram-is-iphonex': device.isMiniProgramIsIPhoneX
    }">
  </div>
</template>

<script>
import { device } from '../../utils'

export default {
  data () {
    return {
      device
    }
  }
}
</script>
