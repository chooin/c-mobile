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
    <c-switch v-model="value" @change="change" type="danger" /> {{ value }}
    <div style="height: 1.5rem"></div>
    <c-switch v-model="disabled" @change="change" type="danger" disabled /> {{ disabled }}
    <div style="height: 1.5rem"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      disabled: true
    }
  },
  methods: {
    change (v) {
      this.$Toast(`${v}`)
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
