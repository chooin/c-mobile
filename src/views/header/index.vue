<template>
  <div class="v-header">
    <c-header />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      :left="{
        back: true,
        text: 'Back'
      }"
      title="标题"
      :right="{
        text: '联系我们',
        color: 'var(--primary)',
        click: () => {
        }
      }"
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      :left="{
        back: true
      }"
      title="没有下划线"
      :right="{
        text: '联系我们',
        color: 'var(--primary)',
        click: () => {
        }
      }"
      noborder-bottom
    />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="primary"
      :left="{
        back: true,
        text: '返回'
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
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
