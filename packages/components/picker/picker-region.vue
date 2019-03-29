<template>
  <div
    class="c-picker-region"
    :class="{
      'c-picker-region__is-iphonex': isMiniProgramIsIPhoneX,
      'c-picker-region__visible': _value
    }">
    <div class="c-picker-region__content">
      <div class="c-picker-region__action">
        <div class="c-picker-region__cancel" @click="onCancel">取消</div>
        <div class="c-picker-region__done" @click="onDone">完成</div>
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
              placeholder: item.id === null
            }">
            {{ item.name }}
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in cities"
            :key="index"
            :class="{
              placeholder: item.id === null
            }">
            {{ item.name }}
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in districts"
            :key="index"
            :class="{
              placeholder: item.id === null
            }">
            {{ item.name }}
          </div>
        </picker-view-column>
      </picker-view>
    </div>
    <i class="c-picker-region__cover" @touchstart="onCancel"></i>
  </div>
</template>

<script>
import { isMiniProgramIsIPhoneX } from '../../utils/device'
import originProvince from './data/province'
import originCity from './data/city'
import originDistrict from './data/district'

export default {
  data () {
    return {
      isMiniProgramIsIPhoneX,
      isUpdated: true,
      indexs: [],
      provinces: [],
      cities: [
        {
          id: null,
          name: '请选择市'
        }
      ],
      districts: [
        {
          id: null,
          name: '请选择区'
        }
      ]
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    ids: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initData () {
      let indexs = this.getIndexs(this.ids)

      this.setProvices(indexs)
      this.setCities(indexs)
      this.setDistricts(indexs)

      setTimeout(() => {
        this.indexs = indexs
      }, 100)
    },
    onCancel () {
      this._value = false
      this.isUpdated = true
    },
    onDone () {
      if (
        this.indexs[0] &&
        this.indexs[1] &&
        this.indexs[2]
      ) {
        let ids = this.getIds(this.indexs)

        this._value = false
        this.isUpdated = true
        this.$emit('change', ids)
      } else {
        if (this.required) {
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
            /* eslint-disable */
            wx.showToast(toast)
            /* eslint-disable */
          }
        } else {
          this._value = false
          this.isUpdated = true
          this.$emit('change', [
            { id: null, name: null },
            { id: null, name: null },
            { id: null, name: null }
          ])
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
          id: null,
          name: '请选择省'
        },
        ...this._originProvince
      ]
    },
    setCities (indexs) {
      this.cities = [{
        id: null,
        name: '请选择市'
      }]
      this.districts = [{
        id: null,
        name: '请选择区'
      }]
      let province = this.provinces[indexs[0]]
      if (province) {
        let preId = province.id / 10000
        let cities = [{
          id: null,
          name: '请选择市'
        }]
        for (let item of this._originCity) {
          if (String(item.id).indexOf(preId) === 0) {
            cities.push(item)
          }
        }
        this.cities = cities
      }
    },
    setDistricts (indexs) {
      this.districts = [{
        id: null,
        name: '请选择区'
      }]
      let city = this.cities[indexs[1]]
      if (city) {
        let preId = city.id / 100
        let districts = [{
          id: null,
          name: '请选择区'
        }]
        for (let item of this._originDistrict) {
          if (String(item.id).indexOf(preId) === 0) {
            districts.push(item)
          }
        }
        this.districts = districts
      }
    },
    getIndexs (ids) {
      let indexs = []
      if (ids[0] === null || typeof ids[0] === 'undefined') {
        indexs.push(0)
      } else {
        let provinces = [
          {
            id: null,
            name: '请选择省'
          },
          ...this._originProvince
        ]
        let index = provinces.findIndex(item => item.id === ids[0])
        indexs.push(index < 0 ? 0 : index)
      }
      if (ids[1] === null || typeof ids[1] === 'undefined') {
        indexs.push(0)
      } else {
        let cities = [{
          id: null,
          name: '请选择市'
        }]
        let pre = parseInt(ids[1] / 10000)
        for (let item of this._originCity) {
          if (String(item.id).indexOf(pre) === 0) {
            cities.push(item)
          }
        }
        let index = cities.findIndex(item => item.id === ids[1])
        indexs.push(index < 0 ? 0 : index)
      }
      if (ids[2] === null || typeof ids[2] === 'undefined') {
        indexs.push(0)
      } else {
        let districts = [{
          id: null,
          name: '请选择区'
        }]
        let pre = parseInt(ids[2] / 100)
        for (let item of this._originDistrict) {
          if (String(item.id).indexOf(pre) === 0) {
            districts.push(item)
          }
        }
        let index = districts.findIndex(item => item.id === ids[2])
        indexs.push(index < 0 ? 0 : index)
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
        if (
          this.value &&
          this.isUpdated
        ) {
          this.initData()
          this.isUpdated = false
        }
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    },
    _originProvince () {
      let items = []
      for (let item of originProvince) {
        items.push({
          id: parseInt(item.slice(0, 6)),
          name: item.slice(6)
        })
      }
      return items
    },
    _originCity () {
      let items = []
      for (let item of originCity) {
        items.push({
          id: parseInt(item.slice(0, 6)),
          name: item.slice(6)
        })
      }
      return items
    },
    _originDistrict () {
      let items = []
      for (let item of originDistrict) {
        items.push({
          id: parseInt(item.slice(0, 6)),
          name: item.slice(6)
        })
      }
      return items
    }
  }
}
</script>
