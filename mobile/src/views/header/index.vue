<template>
  <div class="v-header">
    <c-header />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      suspend
      :left="{
        back: true,
        close: closeClick,
        text: 'Back'
      }"
      title="标题"
      :right="{
        text: '联系我们',
        color: '#39f',
        to: 'tel:13888888888'
      }"
    >
    </c-header>
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      :left="{
        back: true,
        text: '微信'
      }"
      title="没有下划线"
      :right="{
        text: '联系我们',
        color: '#39f'
      }"
      noborder-bottom
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="primary"
      :left="{
        back: true
      }"
      title="标题"
      :right="{
        text: '联系我们',
        click: () => {}
      }"
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="success"
      :left="{
        back: true,
        text: 'Back'
      }"
      title="标题"
      :right="{
        text: '联系我们',
        click: () => {}
      }"
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="warning"
      :left="{
        back: true,
        text: 'Back'
      }"
      title="标题"
      :right="{
        text: '联系我们',
        click: () => {}
      }"
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="danger"
      :left="{
        back: true,
        text: 'Back'
      }"
      title="标题"
      :right="{
        text: '联系我们',
        click: () => {}
      }"
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header>
      <template slot="left">
        左边
      </template>
      <template slot="title">
        标题
      </template>
      <template slot="right">
        右边
      </template>
    </c-header>
  </div>
</template>

<script>
export default {
  methods: {
    closeClick () {
      this.$Toast('close')
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
