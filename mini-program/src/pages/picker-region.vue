<template>
  <div class="v-picker-region">
    <c-picker-region
      :province-id="provinceId"
      :city-id="cityId"
      :district-id="districtId"
      @change="pickerRegionChange">
    </c-picker-region>
  </div>
</template>

<script>
import cPickerRegion from '../../../packages/components/picker/picker-region.vue'

export default {
  data () {
    return {
      provinceId: 130000,
      cityId: 130500,
      districtId: 130503
    }
  },
  components: {
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
    }
  }
}
</script>

<style>
  page {
    background: #f2f2f2;
  }
</style>
