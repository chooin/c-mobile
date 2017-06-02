<template>
  <div class="c-toast" @click="handleClick">
    <div class="content">
      <p v-for="text in texts">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null
    }
  },
  props: {
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
  @import './style';
</style>
