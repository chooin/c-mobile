<template>
  <div class="v-actionsheet">
    <c-btn type="primary" @click="btn1Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn2Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn3Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn4Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn5Click">显示 actionsheet</c-btn>
    <c-actionsheet
      :actions="actionsheet.actions"
      title="标题"
      description="我是描述"
      cancel-text="取消"
      v-model="actionsheet.visible" />
    <c-actionsheet
      :actions="actionsheetnone.actions"
      cancel-text="取消"
      v-model="actionsheetnone.visible" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      actionsheet: {
        visible: false,
        actions: null
      },
      actionsheetnone: {
        visible: false,
        actions: null
      }
    }
  },
  methods: {
    btn1Click () {
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
    },
    btn2Click () {
      this.actionsheet = {
        visible: true,
        actions: []
      }
    },
    btn3Click () {
      this.actionsheet = {
        visible: true,
        actions: [
          {
            text: '上海喔噻互联网科技有限公司 - 我时wwwDevin',
            click: () => {
              window.alert(`修改被点击`)
            }
          }
        ]
      }
    },
    btn4Click () {
      this.actionsheetnone = {
        visible: true,
        actions: [
          {
            text: '修改',
            click: () => {
              window.alert(`修改被点击`)
            }
          }
        ]
      }
    },
    btn5Click () {
      this.actionsheetnone = {
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
