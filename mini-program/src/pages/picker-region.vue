<template>
  <div class="v-picker-region">
    <c-button type="primary" @click="onClick">show picker</c-button>
    <c-picker-region
      v-model="visible"
      :province-id="provinceId"
      :city-id="cityId"
      :district-id="districtId"
      @change="pickerRegionChange">
    </c-picker-region>
  </div>
</template>

<script>
import cButton from '../../../packages/components/button/button'
import cPickerRegion from '../../../packages/components/picker/picker-region.vue'

export default {
  data () {
    return {
      provinceId: 130000,
      cityId: 130500,
      districtId: 130503,
      visible: false
    }
  },
  components: {
    cButton,
    cPickerRegion
  },
  methods: {
    pickerRegionChange (e) {
      // [
      //   this.provinceId,
      //   this.cityId,
      //   this.provinceId
      // ] = e
      console.log(e)
    },
    onClick () {
      this.visible = true
    }
  }
}
</script>

<style>
  page {
    background: #f2f2f2;
  }
</style>
