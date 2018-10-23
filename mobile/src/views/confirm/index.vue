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
      this.$Confirm(31221)
      this.$Confirm({
        title: '提示',
        text: '操作成功操作成功操作成功操作成功操作成功操作成功操作成功操作成功操作成功操作成功',
        button: {
          text: '确定',
          click: () => {
            this.$Toast('ok')
          }
        }
      })
    },
    confirmClick () {
      this.$Confirm({
        title: '提示',
        text: [
          '2017年12月13日，谷歌正式宣布谷歌AI中国中心（Google AI China Center）在北京成立',
          '2017年12月13日，谷歌正式宣布谷歌AI中国中心（Google AI China Center）在北京成立'
        ],
        button: [
          {
            text: '确定',
            color: '#f30',
            click: () => {
              this.$Toast('ok')
            }
          },
          {
            text: '取消',
            click: () => {
              this.$Toast('cancel')
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
