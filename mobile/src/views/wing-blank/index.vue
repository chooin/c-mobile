<template>
  <div class="v-wing-blank">
    <c-wing-blank :size="0">
      <div class="block">Block</div>
    </c-wing-blank>
    <div style="height: 15px"></div>
    <c-wing-blank :size="10">
      <div class="block">Block</div>
    </c-wing-blank>
    <div style="height: 15px"></div>
    <c-wing-blank :size="20">
      <div class="block">Block</div>
    </c-wing-blank>
    <div style="height: 15px"></div>
    <c-wing-blank :size="40">
      <div class="block">Block</div>
    </c-wing-blank>
    <div style="height: 15px"></div>
    <c-wing-blank :size="50">
      <div class="block">Block</div>
    </c-wing-blank>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>
