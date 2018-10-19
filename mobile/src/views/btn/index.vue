<template>
  <div class="v-btn">
    <c-btn type="primary" small>primary</c-btn>
    <c-btn type="success" small>success</c-btn>
    <c-btn type="warning" small>warning</c-btn>
    <c-btn type="danger" small>danger</c-btn>
    <div style="height: 1.5rem"></div>
    <c-btn type="primary" o small>primary</c-btn>
    <c-btn type="success" o small>success</c-btn>
    <c-btn type="warning" o small>warning</c-btn>
    <c-btn type="danger" o small>danger</c-btn>
    <div style="height: 1.5rem"></div>
    <c-btn>default</c-btn>
    <c-btn type="primary">primary</c-btn>
    <c-btn type="success">success</c-btn>
    <c-btn type="warning">warning</c-btn>
    <c-btn type="danger">danger</c-btn>
    <c-btn icon>
      <c-icon name="search" size="2rem" /> 来来来搜索一🦐
    </c-btn>
    <c-btn o>primary</c-btn>
    <c-btn type="primary" o>primary</c-btn>
    <c-btn type="primary" disabled>primary disabled</c-btn>
    <c-btn type="warning" disabled o>warning disabled</c-btn>
    <c-btn type="danger" disabled o>danger disabled</c-btn>
    <c-btn type="success" disabled o>success disabled</c-btn>
    <!-- <c-btn type="success" suspend>success suspend</c-btn> -->
    <c-container safe-area style="margin-top: 15px;">
      <c-btn type="primary">suspend</c-btn>
    </c-container>
    <c-container suspend="top" style="padding: 15px">
      <c-btn type="primary">suspend</c-btn>
    </c-container>
    <c-container
      suspend="bottom"
      background-color="#39f"
      safe-area>
      <c-btn type="primary" border-radius="0">悬浮按钮</c-btn>
    </c-container>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>
