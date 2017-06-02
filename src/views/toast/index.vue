<template>
  <div class="v-toast">
    <c-btn type="primary" @click="btnClick">primary</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick () {
      this.$Toast({
        texts: 'toast',
        duration: 3000,
        cb: () => {
          window.alert('hello toast')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
