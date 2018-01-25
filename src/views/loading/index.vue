<template>
  <div class="v-loading">
    <c-btn type="primary" @click="showLoading">显示 Loading，3 秒后消失</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading () {
      this.$Loading.show()
      // setTimeout(() => {
      //   this.$Loading.hide()
      // }, 3000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./style";
</style>
