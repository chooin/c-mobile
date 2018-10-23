<template>
  <div class="v-loading">
    <c-btn type="primary" @click="showLoading">显示 Loading</c-btn>
    <c-btn type="danger" @click="showLoading">显示 Loading</c-btn>
    <c-btn type="success" @click="showLoading">显示 Loading</c-btn>
    <c-btn type="warning" @click="showLoading">显示 Loading</c-btn>
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
