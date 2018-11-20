<template>
  <div class="v-button">
    <c-button type="primary" small>primary</c-button>
    <c-button type="success" small>success</c-button>
    <c-button type="warning" small>warning</c-button>
    <c-button type="danger" small>danger</c-button>
    <div style="height: 1.5rem"></div>
    <c-button type="primary" o small>primary</c-button>
    <c-button type="success" o small>success</c-button>
    <c-button type="warning" o small>warning</c-button>
    <c-button type="danger" o small>danger</c-button>
    <div style="height: 1.5rem"></div>
    <c-button>default</c-button>
    <c-button type="primary">primary</c-button>
    <c-button type="success">success</c-button>
    <c-button type="warning">warning</c-button>
    <c-button type="danger">danger</c-button>
    <c-button icon>
      <c-icon name="search" size="2rem" /> 来来来搜索一🦐
    </c-button>
    <c-button icon="right">
      <c-icon name="search" size="2rem" /> 来来来搜索一🦐
    </c-button>
    <c-button o>primary</c-button>
    <c-button type="primary" o>primary</c-button>
    <c-button type="primary" disabled>primary disabled</c-button>
    <c-button type="warning" disabled o>warning disabled</c-button>
    <c-button type="danger" disabled o>danger disabled</c-button>
    <c-button type="success" disabled o>success disabled</c-button>
    <c-container
      fixed="top"
      padding="15px">
      <c-button type="primary" @click="onClick">头部悬浮按钮</c-button>
    </c-container>

    <!-- safe-area 默认为 true -->
    <c-container
      fixed="bottom"
      background-color="#fff"
      padding="15px">
      <c-button type="primary" :border-radius="0">底部悬浮按钮</c-button>
    </c-container>
  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$Toast('123')
    }
  }
}
</script>


<style scoped lang="scss">
  @import './style';
</style>
