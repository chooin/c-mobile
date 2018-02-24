<template>
  <div class="v-actionsheet">
    <c-btn type="primary" @click="btn1Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn2Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn3Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn4Click">显示 actionsheet</c-btn>
    <div style="height: 1000px"></div>
    <c-btn type="primary" @click="btn5Click">显示 actionsheet</c-btn>
    <c-actionsheet
      :actions="actionsheet.actions"
      title="2017年12月13日，谷歌正式宣布谷歌AI中国中心（Google AI China Center）在北京成立"
      description="1999年下半年，谷歌网站“Google”正式启用。[3]  2010年3月23日，宣布关闭在中国大。"
      cancel-text="取消"
      v-model="actionsheet.visible" />
    <c-actionsheet
      :actions="actionsheetnone.actions"
      title="Actionsheet"
      cancel-text="Cancel"
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
            text: 'Edit',
            click: () => {
              window.alert(`修改被点击`)
            }
          },
          {
            text: 'Delete',
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
