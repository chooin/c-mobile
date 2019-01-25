<template>
  <div class="v-picker-region">
    <div>
      {{ province.name }}
      {{ city.name }}
      {{ district.name }}
    </div>
    <c-button type="primary" @click="onClick">show picker</c-button>
    <c-picker-region
      v-model="visible"
      :province-id="province.id"
      :city-id="city.id"
      :district-id="district.id"
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
      province: {
        id: 130000,
        name: '河北省'
      },
      city: {
        id: 130500,
        name: '邢台市'
      },
      district: {
        id: 130503,
        name: '桥西区'
      },
      visible: false
    }
  },
  components: {
    cButton,
    cPickerRegion
  },
  methods: {
    pickerRegionChange (e) {
      [
        this.province,
        this.city,
        this.district
      ] = e
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
