<template>
  <div class="c-toast" v-show="toast.visible" @click="handleClick">
    <div class="content">
      <p v-for="text in toast.texts">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import * as types from '@/store/mutation-types'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      timer: null
    }
  },
  methods: {
    handleClick () {
      clearTimeout(this.timer)
      this.hide()
    },
    hide () {
      this.toast.callback()
      this.$store.dispatch(types.TOAST_HIDE)
    }
  },
  computed: mapState({
    toast: state => state.toast
  }),
  watch: {
    'toast.visible' () {
      if (this.toast.visible) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => { this.hide() }, 2000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
