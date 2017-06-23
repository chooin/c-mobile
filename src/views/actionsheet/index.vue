<template>
  <div class="v-actionsheet">
    <c-actionsheet
      :actions="actions"
      cancel-text="取消"
      v-model="value" />
    <c-btn type="primary" @click="showActionsheetClick">显示</c-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      actions: [
        {
          text: '修改',
          click: () => {
            console.log('修改')
          }
        },
        {
          text: '删除',
          color: 'var(--danger)',
          click: () => {
            console.log('删除')
          }
        }
      ]
    }
  },
  methods: {
    showActionsheetClick () {
      this.value = true
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
