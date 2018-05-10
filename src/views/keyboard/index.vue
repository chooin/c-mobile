<template>
  <div class="keyboard">
    <c-input-group title="用户信息">
      <c-input @click="showKeyboard">
        <c-input-head>身份证号码</c-input-head>
        <c-input-body>
          <c-text placeholder="请输入身份证号码" :cursor="show">{{ value }}</c-text>
        </c-input-body>
      </c-input>
    </c-input-group>
    <c-keyboard
      allow-hide
      type="idcard"
      v-model="show"
      done-text="完成"
      description="请输入身份证号码"
      @done="keyboardDone"
      @click="keyboardClick"
      @delete="keyboardDelete"
      @hide="keyboardHide" />
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  data () {
    return {
      value: '',
      show: true
    }
  },
  methods: {
    showKeyboard () {
      this.show = true
    },
    keyboardDelete () {
      this.value = this.value.substring(0, this.value.length - 1)
    },
    keyboardClick (v) {
      this.value += v
    },
    keyboardDone () {
      this.$Toast('操作完成')
    },
    keyboardHide () {
      console.log('键盘被隐藏')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./style";
</style>
