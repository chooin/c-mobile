<template>
  <div class="v-loading">
    <c-loading v-model="value" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  @import "./style";
</style>
