<template>
  <div class="v-switch">
    <c-switch v-model="value" /> {{ value }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
