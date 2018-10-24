<template>
  <div class="v-container">
    <c-container fixed="top">
      <c-button type="danger">Button</c-button>
    </c-container>
    <c-container safe-area fixed="bottom" padding="10px" :z-index="1500" background-color="#aaa">
      <c-button type="success">完整的 container 配置，支持 iPhoneX</c-button>
    </c-container>
  </div>
</template>
