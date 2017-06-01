<template>
  <div class="v-flex">
    <section>
      <c-flex>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
      </c-flex>
    </section>
    <section>
      <c-flex>
        <c-flex-item>1</c-flex-item>
        <c-flex-item :flex="2">2</c-flex-item>
      </c-flex>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
