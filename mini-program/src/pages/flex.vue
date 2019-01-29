<template>
  <div class="v-flex">
    <section>
      <c-flex>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
      </c-flex>
    </section>
    <section>
      <c-flex>
        <c-flex-item :flex="4">4</c-flex-item>
        <c-flex-item :flex="8">8</c-flex-item>
      </c-flex>
    </section>
    <section>
      <c-flex :gutter="15">
        <c-flex-item :flex="4">4</c-flex-item>
        <c-flex-item :flex="4">4</c-flex-item>
        <c-flex-item :flex="4">4</c-flex-item>
      </c-flex>
    </section>
    <section>
      <c-flex :gutter="15">
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
        <c-flex-item>1</c-flex-item>
      </c-flex>
    </section>
  </div>
</template>

<script>
import cFlex from '../../../packages/components/flex/flex.vue'
import cFlexItem from '../../../packages/components/flex/flex-item.vue'

export default {
  components: {
    cFlex,
    cFlexItem,
  }
}
</script>

<style scoped lang="scss">
.v-flex {
  section{
    margin: 15px 0;
  }
  .c-flex {
    .c-flex-item {
      line-height: 50px;
      color: #fff;
      background: rgba(0, 153, 229, .7);
      text-align: center;
      &:nth-of-type(odd) {
        background: rgb(0, 153, 229);
      }
    }
  }
}
</style>
