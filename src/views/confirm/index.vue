<template>
  <div class="v-toast">
    <c-btn type="primary" @click="btnClick">primary</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick () {
      this.$Confirm({
        text: '我是 confirm',
        ok: () => {
          window.alert('ok')
        },
        cancel: () => {
          window.alert('cancel')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
