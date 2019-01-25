<template>
  <div
    class="c-picker-region"
    :class="{
      'c-picker-region__is-iphonex': isMiniProgramIsIPhoneX,
      'c-picker-region__visible': _value
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
      :value="indexs"
      @change="onChange">
      <picker-view-column>
        <div
          v-for="(item, index) in provinces"
          :key="index"
          :class="{
            placeholder: item.id === 0
          }">
          {{ item.name }}
        </div>
      </picker-view-column>
      <picker-view-column>
        <div
          v-for="(item, index) in cities"
          :key="index"
          :class="{
            placeholder: item.id === 0
          }">
          {{ item.name }}
        </div>
      </picker-view-column>
      <picker-view-column>
        <div
          v-for="(item, index) in districts"
          :key="index"
          :class="{
            placeholder: item.id === 0
          }">
          {{ item.name }}
        </div>
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
      indexs: [],
      provinces: [],
      cities: [
        {
          id: 0,
          name: '市'
        }
      ],
      districts: [
        {
          id: 0,
          name: '区'
        }
      ]
    }
  },
  props: {
    value: {
      type: Number,
      default: true
    },
    provinceId: {
      type: Number,
      default: null
    },
    cityId: {
      type: Number,
      default: null
    },
    districtId: {
      type: Number,
      default: null
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let indexs = this.getIndexs([
        this.provinceId,
        this.cityId,
        this.districtId
      ])

      this.setProvices(indexs)
      this.setCities(indexs)
      this.setDistricts(indexs)

      setTimeout(() => {
        this.indexs = indexs
      }, 100)
    },
    onCancel () {
      this.initData()

      this._value = false
    },
    onDone () {
      if (
        this.indexs[0] &&
        this.indexs[1] &&
        this.indexs[2]
      ) {
        let ids = this.getIds(this.indexs)

        this._value = false
        this.$emit('change', ids)
      } else {
        let Megalo = Megalo || false
        let title
        if (!this.indexs[2]) title = '请选择区'
        if (!this.indexs[1]) title = '请选择市'
        if (!this.indexs[0]) title = '请选择省'
        let toast = {
          title,
          icon: 'none',
          duration: 2000
        }
        if (Megalo) {
          Megalo.showToast(toast)
        } else {
          wx.showToast(toast)
        }
      }
    },
    onChange (e) {
      if (e.detail.value[2] !== this.indexs[2]) {
        this.indexs = e.detail.value
        return
      }
      if (e.detail.value[1] !== this.indexs[1]) {
        this.setDistricts(e.detail.value)
        this.indexs = [
          e.detail.value[0],
          e.detail.value[1],
          0
        ]
        return
      }
      if (e.detail.value[0] !== this.indexs[0]) {
        this.setCities(e.detail.value)
        this.indexs = [
          e.detail.value[0],
          0,
          0
        ]
        return
      }
    },
    setProvices () {
      this.provinces = [
        {
          id: 0,
          name: '省'
        },
        ...originProvince
      ]
    },
    setCities (indexs) {
      this.cities = [{
        id: 0,
        name: '市'
      }]
      this.districts = [{
        id: 0,
        name: '区'
      }]
      let province = this.provinces[indexs[0]]
      if (province) {
        let preId = province.id / 10000
        let cities = [{
          id: 0,
          name: '市'
        }]
        for (let item of originCity) {
          if (String(item.id).indexOf(preId) === 0) {
            cities.push(item)
          }
        }
        this.cities = cities
      }
    },
    setDistricts (indexs) {
      this.districts = [{
        id: 0,
        name: '区'
      }]
      let city = this.cities[indexs[1]]
      if (city) {
        let preId = city.id / 100
        let districts = [{
          id: 0,
          name: '区'
        }]
        for (let item of originDistrict) {
          if (String(item.id).indexOf(preId) === 0) {
            districts.push(item)
          }
        }
        this.districts = districts
      }
    },
    getIndexs (ids) {
      let indexs = []
      if (ids[0]) {
        let provinces = [
          {
            id: 0,
            name: '省'
          },
          ...originProvince
        ]
        let index = provinces.findIndex(item => item.id === ids[0])
        indexs.push(index < 0 ? 0 : index)
      } else {
        indexs.push(0)
      }
      if (ids[1]) {
        let cities = [{
          id: 0,
          name: '市'
        }]
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
        let districts = [{
          id: 0,
          name: '区'
        }]
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
      let province = indexs[0]
        ? this.provinces[indexs[0]]
        : null
      let city = indexs[1]
        ? this.cities[indexs[1]]
        : null
      let district = indexs[2]
        ? this.districts[indexs[2]]
        : null
      return [
        province,
        city,
        district
      ]
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>
