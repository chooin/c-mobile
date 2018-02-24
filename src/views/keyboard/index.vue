<template>
  <div class="keyboard">
    <c-input-group title="用户信息">
      <c-input addon>
        <c-input-head>联系电话</c-input-head>
        <c-input-body>
          <input type="tel" v-model="value">
        </c-input-body>
      </c-input>
    </c-input-group>
    <c-keyboard type="idcard" @click="keyboardClick" @delete="keyboardDelete" />
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    keyboardDelete () {
      this.value = this.value.substring(0, this.value.length - 1)
    },
    keyboardClick (v) {
      this.value = v + this.value
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./style";
</style>
