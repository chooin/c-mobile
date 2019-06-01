<template>
  <div class="v-load-more">
    <c-load-more >标题</c-load-more>
  </div>
</template>

<script>
import cLoadMore from '../../../packages/components/load-more/load-more.vue'

export default {
  components: {
    cLoadMore
  }
}
</script>

<style>
.v-load-more {
  padding: 15px;
}
</style>
