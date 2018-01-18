<template>
  <div class="v-actionsheet">
    <c-btn type="primary" @click="showActionsheetClick">显示 actionsheet</c-btn>
    <c-actionsheet
      :actions="actionsheet.actions"
      title="标题"
      description="我是描述"
      cancel-text="取消"
      v-model="actionsheet.visible" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      actionsheet: {
        visible: false,
        actions: null
      }
    }
  },
  methods: {
    showActionsheetClick () {
      this.actionsheet = {
        visible: true,
        actions: [
          {
            text: '修改',
            click: () => {
              window.alert(`修改被点击`)
            }
          },
          {
            text: '删除',
            color: '#f30',
            click: () => {
              window.alert(`删除被点击`)
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
