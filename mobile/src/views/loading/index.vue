<template>
  <div class="v-loading">
    <c-btn type="primary" small @click="showLoading">显示 Loading，3 秒后消失</c-btn>
    <c-btn type="danger" small @click="showLoading">显示 Loading，3 秒后消失</c-btn>
    <c-btn type="success" small @click="showLoading">显示 Loading，3 秒后消失</c-btn>
    <c-btn type="warning" small @click="showLoading">显示 Loading，3 秒后消失</c-btn>
    <c-btn type="primary" suspend @click="showLoading">显示 Loading，3 秒后消失，loading 中按钮变灰色</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading () {
      this.$Loading.show('加载中')
      setTimeout(() => {
        this.$Loading.hide()
      }, 3000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./style";
</style>
