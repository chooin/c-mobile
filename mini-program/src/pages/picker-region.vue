<template>
  <div class="v-picker-region">
    <c-picker-region v-model="value" @change="pickerRegionChange"></c-picker-region>
  </div>
</template>

<script>
import cPickerRegion from '../../../packages/components/picker/picker-region.vue'

export default {
  data () {
    return {
      value: [130000, 130500, 130506]
    }
  },
  components: {
    cPickerRegion
  },
  methods: {
    pickerRegionChange (e) {
      console.log(e)
      console.log(this.value)
    }
  }
}
</script>

<style>
  page {
    background: #f2f2f2;
  }
</style>
