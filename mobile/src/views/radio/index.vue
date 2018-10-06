<template>
  <div class="v-radio">
    <c-radio-group v-model="raidoValue1" @change="onChange" type="success">
      <c-input-group :title="`品牌：${raidoValue1}`">
        <c-input>
          <c-input-body>
            <c-radio value="Apple">Apple</c-radio>
          </c-input-body>
        </c-input>
        <c-input>
          <c-input-body>
            <c-radio value="Huawei">Huawei</c-radio>
          </c-input-body>
        </c-input>
        <c-input>
          <c-input-body>
            <c-radio value="Vivo">Vivo</c-radio>
          </c-input-body>
        </c-input>
      </c-input-group>
    </c-radio-group>
    <div class="p-15">
      <h3>交通工具：{{ raidoValue2 }}</h3>
      <c-radio-group v-model="raidoValue2" disabled>
        <c-radio value="汽车">汽车</c-radio>
        <c-radio value="火车">火车</c-radio>
        <c-radio value="飞机">飞机</c-radio>
      </c-radio-group>
    </div>
    <div class="p-15">
      <h3>交通工具：{{ raidoValue2 }}</h3>
      <c-radio-group v-model="raidoValue2" @change="onChange">
        <c-radio value="汽车">汽车</c-radio>
        <c-radio value="火车">火车</c-radio>
        <c-radio value="飞机">飞机</c-radio>
      </c-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      raidoValue1: 'Huawei',
      raidoValue2: '火车'
    }
  },
  methods: {
    onChange (v) {
      this.$Toast(v)
    }
  }
}
</script>
