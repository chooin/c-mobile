<template>
  <div class="v-toast">
    <c-btn type="primary" @click="btnClick">primary</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick () {
      this.$Toast({
        texts: '我不是toast',
        cb: () => {}
      })
      this.$Toast({
        texts: 'dadassd',
        cb: () => {}
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
