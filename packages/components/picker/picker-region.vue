<template>
  <div
    class="c-picker-region"
    :class="{
      'is-iphonex': isMiniProgramIsIPhoneX
    }">
    <div class="c-picker-region__action">
      <div
        class="c-picker-region__cancel"
        @click="onCancel">取消</div>
      <div
        class="c-picker-region__done"
        @click="onDone">完成</div>
    </div>
    <picker-view
      indicator-style="height: 36px;"
      mask-style="backgroud: #000;"
      :value="_value"
      @change="onChange">
      <picker-view-column>
        <div v-for="(item, index) in province" :key="index">{{ item.name }}</div>
      </picker-view-column>
      <picker-view-column>
        <div v-for="(item, index) in city" :key="index">{{ item.name }}</div>
      </picker-view-column>
      <picker-view-column>
        <div v-for="(item, index) in district" :key="index">{{ item.name }}</div>
      </picker-view-column>
    </picker-view>
  </div>
</template>

<script>
import {
  isMiniProgramIsIPhoneX
} from '../../utils'
import originProvince from './data/province'
import originCity from './data/city'
import originDistrict from './data/district'

export default {
  data () {
    return {
      isMiniProgramIsIPhoneX,
      province: [],
      city: [
        {
          id: 0,
          name: '市'
        }
      ],
      district: [
        {
          id: 0,
          name: '区'
        }
      ]
    }
  },
  props: {
    value: {
      type: Array,
      default: () => [110000, 110100, 110101]
    }
  },
  mounted () {
    this.setProvice()
  },
  methods: {
    onCancel () {},
    onDone () {},
    onChange (e) {
      if (e.detail.value[2] !== this._value[2]) {
        this._value = e.detail.value
        return
      }
      if (e.detail.value[1] !== this._value[1]) {
        this.isCityChange(e)
        this._value = [
          e.detail.value[0],
          e.detail.value[1],
          0
        ]
        return
      }
      if (e.detail.value[0] !== this._value[0]) {
        this.isProvinceChange(e)
        this._value = [
          e.detail.value[0],
          0,
          0
        ]
        return
      }
    },
    setProvice () {
      this.province = [
        {
          id: 0,
          name: '省'
        },
        ...originProvince
      ]
    },
    isProvinceChange (e) {
      this.setCity(e.detail.value)
    },
    isCityChange (e) {
      this.setDistrict(e.detail.value)
    },
    isDistrictChange () {

    },
    setCity (value) {
      this.city = [{
        id: 0,
        name: '市'
      }]
      this.district = [{
        id: 0,
        name: '区'
      }]
      let province = this.province[value[0]]
      if (province) {
        let preId = province.id / 10000
        let city = [{
          id: 0,
          name: '市'
        }]
        for (let item of originCity) {
          if (String(item.id).indexOf(preId) === 0) {
            city.push(item)
          }
        }
        this.city = city
      }
    },
    setDistrict (value) {
      this.district = [{
        id: 0,
        name: '区'
      }]
      let city = this.city[value[1]]
      if (city) {
        let preId = city.id / 100
        let district = [{
          id: 0,
          name: '区'
        }]
        for (let item of originDistrict) {
          if (String(item.id).indexOf(preId) === 0) {
            district.push(item)
          }
        }
        this.district = district
      }
    },
    getIndex (id, type) {
      if (type === 'province') {
        let provinces = originProvince
        let index = provinces.findIndex(item => item.id === id)
        return index < 0 ? 0 : index
      }
      if (type === 'city') {
        let cities = []
        let pre = parseInt(id / 10000)
        for (let item of originCity) {
          if (String(item.id).indexOf(pre) === 0) {
            cities.push(item)
          }
        }
        let index = cities.findIndex(item => item.id === id)
        return index < 0 ? 0 : index
      }
      if (type === 'district') {
        let districts = []
        let pre = parseInt(id / 100)
        for (let item of originDistrict) {
          if (String(item.id).indexOf(pre) === 0) {
            districts.push(item)
          }
        }
        let index = districts.findIndex(item => item.id === id)
        return index < 0 ? 0 : index
      }
    },
    getIds (indexs) {
      let provinceId = 0
      let cityId = 0
      let districtId = 0
      if (
        indexs[0] &&
        indexs[0] !== 0
      ) {
        provinceId = originProvince[indexs[0]].id
      }
      if (
        indexs[0] &&
        indexs[0] !== 0 &&
        indexs[1] &&
        indexs[1] !== 0
      ) {
        provinceId = originProvince[indexs[0]].id
      }
      return [
        provinceId,
        cityId,
        districtId
      ]
    }
  },
  computed: {
    _value: {
      get () {
        let provinceIndex = this.getIndex(this.value[0], 'province')
        let cityIndex = this.getIndex(this.value[1], 'city')
        let districtIndex = this.getIndex(this.value[2], 'district')
        return [
          provinceIndex,
          cityIndex,
          districtIndex
        ]
      },
      set (v) {
        let ids = this.getIds(v)
        console.log(ids)
        this.$emit('input', v)
        this.$emit('change', v)
      }
    }
  }
}
</script>
