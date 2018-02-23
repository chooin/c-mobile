<template>
  <div class="v-actionsheet">
    <c-btn type="primary" @click="btn1Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn2Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn3Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn4Click">显示 actionsheet</c-btn>
    <c-btn type="primary" @click="btn5Click">显示 actionsheet</c-btn>
    <c-actionsheet
      :actions="actionsheet.actions"
      title="2017年12月13日，谷歌正式宣布谷歌AI中国中心（Google AI China Center）在北京成立"
      description="1999年下半年，谷歌网站“Google”正式启用。[3]  2010年3月23日，宣布关闭在中国大陆市场搜索服务。2015年8月10日，宣布对企业架构进行调整，并创办了一家名为Alphabet的“伞形公司”（Umbrella Company），成为Alphabet旗下子公司。2015年，在2015年度“世界品牌500强”排行中重返榜首，苹果和亚马逊分别位居第二和第三名。2016年6月8日，《2016年BrandZ全球最具价值品牌百强榜》公布，以2291.98亿美元的品牌价值重新超越苹果成为百强第一。[4]  2017年2月，Brand Finance发布2017年度全球500强品牌榜单，排名第一。[5]  2017年6月，《2017年BrandZ最具价值全球品牌100强》公布，谷歌公司名列第一位。"
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
