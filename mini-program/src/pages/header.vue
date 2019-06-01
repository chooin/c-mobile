<template>
  <div class="v-header">
    <c-header />
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-container fixed="top">
      <c-header
        :left="{
          back: true,
          close: closeClick,
          text: 'Back'
        }"
        :right="{
          text: '联系我们',
          color: '#39f',
          to: 'tel:13888888888'
        }"
      >
      </c-header>
    </c-container>
    <c-header
      :left="{
        back: true,
        text: '微信'
      }"
      :right="{
        text: '联系我们',
        color: '#39f'
      }"
      noborder-bottom
    >
    没有下划线
    </c-header>
    <div style="height: 1.5rem; width: 100%;"></div>
    <c-header
      type="primary"
      :left="{
        back: true
      }"
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
      标题
      <template slot="right">
        右边
      </template>
    </c-header>
  </div>
</template>

<script>
import cHeader from '../../../packages/components/header/header.vue'

export default {
  components: {
    cHeader
  }
}
</script>

<style>
.v-header {
  padding: 15px;
}
</style>
