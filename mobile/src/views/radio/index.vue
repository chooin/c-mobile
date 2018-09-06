<template>
  <div class="v-radio">

    <h3>交通工具：{{ raidoValue1 }}</h3>

    <c-radio-group v-model="raidoValue2" disabled>
      <c-radio value="汽车">汽车</c-radio>
      <c-radio value="火车">火车</c-radio>
      <c-radio value="飞机">飞机</c-radio>
    </c-radio-group>

    <h3>品牌：{{ raidoValue2 }}</h3>

    <c-input-group>
      <c-input>
        <c-input-body>
          <c-radio-group v-model="raidoValue1">
            <c-radio value="Apple">Apple</c-radio>
          </c-radio-group>
        </c-input-body>
      </c-input>
      <c-input>
        <c-input-body>
          <c-radio-group v-model="raidoValue1" type="danger">
            <c-radio value="Huawei">Huawei</c-radio>
          </c-radio-group>
        </c-input-body>
      </c-input>
      <c-input>
        <c-input-body>
          <c-radio-group v-model="raidoValue1" type="success">
            <c-radio value="Vivo">Vivo</c-radio>
          </c-radio-group>
        </c-input-body>
      </c-input>
    </c-input-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      raidoValue1: 'Apple',
      raidoValue2: '火车'
    }
  }
}
</script>
