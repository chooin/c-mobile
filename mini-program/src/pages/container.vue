<template>
  <div class="v-container">
    <c-container>标题</c-container>
  </div>
</template>

<script>
import cContainer from '../../../packages/components/container/container.vue'

export default {
  components: {
    cContainer
  }
}
</script>

<style>
.v-container {
  padding: 15px;
}
</style>
