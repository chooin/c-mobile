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
    <c-text block to="//www.163.com">跳转到网易</c-text>
    <c-text block to="https://www.163.com">跳转到网易</c-text>
    <c-text block to="tel:13888888888">打电话</c-text>
    <c-text block to="//example">跳转到当前域名下的某个地址</c-text>
    <c-text block @click="alert">事件</c-text>
    <c-text block light>浅灰色</c-text>
    <c-text placeholder="placeholder">{{ placeholder }}</c-text>
    <c-text align="left">left</c-text>
    <c-text align="center">center</c-text>
    <c-text align="right">right</c-text>
    <c-text block cursor>cursor</c-text>
    <c-text block font-family="SimSun" font-size="100">宋体</c-text>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholder: null
    }
  },
  methods: {
    alert () {
      window.alert()
    }
  },
  created () {
    setTimeout (() => {
      this.placeholder = 'placeholder change'
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
