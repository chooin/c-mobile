<template>
  <div class="v-toast">
    <c-btn type="primary" @click="alertClick">alert</c-btn>
    <c-btn type="primary" @click="confirmClick">confirm</c-btn>
    <c-btn type="primary" style="margin-top: 1000px;" @click="confirmClick">confirm</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    alertClick () {
      this.$Confirm({
        text: '我是 alert',
        ok: () => {
          window.alert('ok')
        }
      })
    },
    confirmClick () {
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
