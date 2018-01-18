<template>
  <div class="v-actionsheet">
    <c-actionsheet
      :actions="actions"
      title="标题"
      description="我是描述"
      cancel-text="取消"
      v-model="actionVisible" />
    <c-btn type="primary" @click="showActionsheetClick(1)">显示</c-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actionVisible: false,
      actions: null
    }
  },
  methods: {
    showActionsheetClick (id) {
      this.actionVisible = true
      this.actions = [
        {
          text: '修改',
          click: () => {
            window.alert(`修改${id}`)
          }
        },
        {
          text: '删除',
          color: '#f30',
          click: () => {
            window.alert(`删除${id}`)
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
