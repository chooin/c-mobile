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
    <c-text block to="//www.163.com">跳转到网易 //www.163.com</c-text>
    <c-text block to="https://www.163.com">跳转到网易 https://www.163.com</c-text>
    <c-text block :to="{
      path: 'https://www.163.com?b=2',
      query: {
        a: 1
      }
    }">跳转到网易 {
      path: 'https://www.163.com?b=2',
      query: {
        a: 1
      }
    }</c-text>
    <c-text block to="tel:13888888888">打电话</c-text>
    <c-text block to="//example">跳转到当前域名下的某个地址</c-text>
    <c-text block @click="alert">事件</c-text>
    <c-text block light>浅灰色</c-text>
    <c-text placeholder="placeholder">{{ placeholder }}</c-text>
    <c-text align="left" next>左边</c-text>
    <c-text align="center" next>中间</c-text>
    <c-text align="right" next>右边</c-text>
    <c-text block cursor placeholder="placeholder" :content-style="{
      fontSize: '50px'
    }"></c-text>
    <c-text block cursor font-size="50">内容</c-text>
    <c-text align="center" placeholder="placeholder" cursor>w</c-text>
    <c-text block>宋体</c-text>
    <c-text align="right" next>next</c-text>
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
      this.$Toast('toast')
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
