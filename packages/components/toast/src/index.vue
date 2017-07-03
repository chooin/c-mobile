<template>
  <div
    class="c-toast"
    v-show="visible"
    @click="handleClick">
    <div class="content">
      <p v-for="text in texts">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cToast',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default: () => []
    },
    cb: {
      type: Function,
      default () {}
    }
  },
  methods: {
    handleClick () {
      this.cb()
    }
  }
}
</script>

<style scoped lang="scss">
  // @import './style';
</style>
