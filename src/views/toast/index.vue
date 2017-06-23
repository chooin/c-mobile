<template>
  <div class="v-toast">
    <c-btn type="primary" @click="toast0Click">快速 toast</c-btn>
    <c-btn type="primary" @click="toast1Click">快速列表 toast</c-btn>
    <c-btn type="primary" @click="toast2Click">3000 毫秒关闭，关闭回调方法</c-btn>
    <c-btn type="primary" @click="toast3Click">列表提示 5000 毫秒关闭，关闭回调方法</c-btn>
    <c-btn type="primary" @click="toast4Click">toast 覆盖 toast</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    toast0Click () {
      this.$Toast('toast')
    },
    toast1Click () {
      this.$Toast([
        'toast',
        'toast1321312313213'
      ])
    },
    toast2Click () {
      this.$Toast({
        texts: 'toast',
        duration: 3000,
        cb: () => {
          window.alert('cb')
        }
      })
    },
    toast3Click () {
      this.$Toast({
        texts: [
          'toast',
          'toast1321312313213'
        ],
        duration: 5000,
        cb: () => {
          window.alert('cb')
        }
      })
    },
    toast4Click () {
      this.toast2Click()
      this.toast3Click()
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
