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
      indicator-class="indicator-style"
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
    getIndexs (ids) {
      let indexs = []
      if (ids[0]) {
        let provinces = originProvince
        let index = provinces.findIndex(item => item.id === ids[0])
        indexs.push(index < 0 ? 0 : index)
      } else {
        indexs.push(0)
      }
      if (ids[1]) {
        let cities = []
        let pre = parseInt(ids[1] / 10000)
        for (let item of originCity) {
          if (String(item.id).indexOf(pre) === 0) {
            cities.push(item)
          }
        }
        let index = cities.findIndex(item => item.id === ids[1])
        indexs.push(index < 0 ? 0 : index)
      } else {
        indexs.push(0)
      }
      if (ids[2]) {
        let districts = []
        let pre = parseInt(ids[2] / 100)
        for (let item of originDistrict) {
          if (String(item.id).indexOf(pre) === 0) {
            districts.push(item)
          }
        }
        let index = districts.findIndex(item => item.id === ids[2])
        indexs.push(index < 0 ? 0 : index)
      } else {
        indexs.push(0)
      }
      return indexs
    },
    getIds (indexs) {
      console.log(indexs, 'indexs')
      let ids = []
      if (indexs[0]) {
        let provinces = originProvince
        ids.push(provinces[indexs[0]].id)
      } else {
        ids.push(null)
      }
      if (indexs[1]) {
        let cities = []
        let pre = parseInt(ids[0] / 10000)
        for (let item of originCity) {
          if (String(item.id).indexOf(pre) === 0) {
            cities.push(item)
          }
        }
        ids.push(cities[indexs[1]].id)
      } else {
        ids.push(null)
      }
      if (indexs[2]) {
        let districts = []
        let pre = parseInt(ids[1] / 100)
        for (let item of originDistrict) {
          if (String(item.id).indexOf(pre) === 0) {
            districts.push(item)
          }
        }
        ids.push(districts[indexs[2]].id)
      } else {
        ids.push(null)
      }
      return ids
    }
  },
  computed: {
    _value: {
      get () {
        let indexs = this.getIndexs(this.value)
        return indexs
      },
      set (indexs) {
        let ids = this.getIds(indexs)
        console.log(ids, 'ids')
        this.$emit('input', ids)
        this.$emit('change', ids)
      }
    }
  }
}
</script>
