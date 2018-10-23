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
    <c-button o>primary</c-button>
    <c-button type="primary" o>primary</c-button>
    <c-button type="primary" disabled>primary disabled</c-button>
    <c-button type="warning" disabled o>warning disabled</c-button>
    <c-button type="danger" disabled o>danger disabled</c-button>
    <c-button type="success" disabled o>success disabled</c-button>
    <!-- <c-button type="success" suspend>success suspend</c-button> -->
    <c-container safe-area style="margin-top: 15px;">
      <c-button type="primary">suspend</c-button>
    </c-container>
    <c-container suspend="top" style="padding: 15px">
      <c-button type="primary">suspend</c-button>
    </c-container>
    <c-container
      suspend="bottom"
      background-color="#39f"
      safe-area>
      <c-button type="primary" border-radius="0">悬浮按钮</c-button>
    </c-container>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>
