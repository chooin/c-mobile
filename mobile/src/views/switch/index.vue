<template>
  <div class="v-switch">
    <c-switch v-model="value" @change="change" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" type="primary" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" type="success" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" type="warning" /> {{ value }}
    <div style="height: 1.5rem"></div>
    beforeChange <c-switch v-model="value" @change="change" type="danger" loading :before-change="beforeChange" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="disabled" @change="change" type="danger" disabled /> {{ disabled }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" small /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" small type="primary" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" small type="success" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="value" @change="change" small type="warning" /> {{ value }}
    <div style="height: 1.5rem"></div>
    beforeChange <c-switch v-model="value" @change="change" small type="danger" loading :before-change="beforeChange" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="disabled" @change="change" small type="danger" disabled /> {{ disabled }}
    <div style="height: 1.5rem"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      disabled: true,
      loading: false
    }
  },
  methods: {
    change (v) {
      this.$Toast(`${v}`)
    },
    beforeChange (next) {
      this.loading = true
      this.$Confirm({
        title: '提示',
        text: 'beforeChange',
        button: [
          {
            text: '确定',
            click: () => {
              next()
              this.loading = false
            }
          },
          {
            text: '取消',
            click: () => {
              this.$Toast('已取消操作')
              this.loading = false
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
