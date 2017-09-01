<template>
  <div class="v-text">
    <c-text block type="primary">primary block</c-text>
    <c-text block type="success">success block</c-text>
    <c-text block type="warning">warning block</c-text>
    <c-text block type="danger">danger block</c-text>
    <c-text>inlone-block</c-text>
    <c-text>inlone-block</c-text>
    <c-text>inlone-block</c-text>
    <c-text block to="/">跳转到首页</c-text>
    <c-text block @click="alert">触发事件</c-text>
    <c-text block light>light</c-text>
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
