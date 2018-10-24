<template>
  <div
    class="c-button__suspend__cover"
    :class="{
      'c-button__is-miniprogram': isMiniProgram,
      'c-button__is-miniprogram-is-iphonex': isMiniProgramIsIPhoneX
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
