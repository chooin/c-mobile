<template>
  <div class="v-toast">
    <c-btn type="primary" @click="alertClick">alert</c-btn>
    <c-btn type="primary" @click="confirmClick">confirm</c-btn>
    <p>底部还有个 confirm</p>
    <c-btn type="primary" style="margin-top: 1000px;" @click="confirmClick">执行 confirm 不允许用户滑动屏幕</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    alertClick () {
      this.$Confirm({
        text: '我是 alert',
        ok: {
          click: () => {
            window.alert('ok')
          }
        }
      })
    },
    confirmClick () {
      this.$Confirm({
        text: '我是 confirm',
        ok: {
          text: '确定',
          click: () => {
            window.alert('ok')
          }
        },
        cancel: {
          text: '取消',
          color: '#f30',
          click: () => {
            window.alert('cancel')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
