<template>
  <div class="v-text">
    <c-text block type="primary">primary block</c-text>
    <c-text block type="success">success block</c-text>
    <c-text block type="warning">warning block</c-text>
    <c-text block type="danger">danger block</c-text>
    <c-text>inline-block</c-text>
    <c-text>inline-block</c-text>
    <c-text>inline-block</c-text>
    <c-text block to="/">跳转到首页</c-text>
    <c-text block to="http://www.163.com">跳转到网易</c-text>
    <c-text block to="tel:13888888888">打电话</c-text>
    <c-text block to="//example">跳转到当前域名下的某个地址</c-text>
    <c-text block @click="alert">事件</c-text>
    <c-text block light>浅灰色</c-text>
    <c-text placeholder="placeholder"></c-text>
  </div>
</template>

<script>
export default {
  methods: {
    alert () {
      window.alert()
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
