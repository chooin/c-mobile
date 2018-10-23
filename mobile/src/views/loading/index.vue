<template>
  <div class="v-loading">
    <c-button type="primary" @click="showLoading">显示 Loading</c-button>
    <c-button type="danger" @click="showLoading">显示 Loading</c-button>
    <c-button type="success" @click="showLoading">显示 Loading</c-button>
    <c-button type="warning" @click="showLoading">显示 Loading</c-button>
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
