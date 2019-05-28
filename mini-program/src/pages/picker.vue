<template>
  <div class="v-picker-region">
    <c-input-group>
      <c-input addon next @click="visible.pickerRegion = true">
        <c-input-head>区域</c-input-head>
        <c-input-body>
          <c-text placeholder="请选择区域">{{ district && district.id ? `${province.name} ${city.name} ${district.name}` : null }}</c-text>
        </c-input-body>
      </c-input>
      <c-input addon next @click="visible.picker = true">
        <c-input-head>性别</c-input-head>
        <c-input-body>
          <c-text placeholder="请选择性别">{{ sex && sex.id ? sex.name : null }}</c-text>
        </c-input-body>
      </c-input>
      <c-input addon next @click="visible.date = true">
        <c-input-head>date</c-input-head>
        <c-input-body>
          <c-text placeholder="日期">{{ date }}</c-text>
        </c-input-body>
      </c-input>
      <c-input addon next @click="visible.daterange = true">
        <c-input-head>daterange</c-input-head>
        <c-input-body>
          <c-text placeholder="日期区间">{{ daterange ? `${daterange[0]} 到 ${daterange[1]}` : null }}</c-text>
        </c-input-body>
      </c-input>
    </c-input-group>
    <c-picker-region
      v-model="visible.pickerRegion"
      :ids="[
        province.id,
        city.id,
        district.id
      ]"
      @change="pickerRegionChange">
    </c-picker-region>
    <c-picker
      v-model="visible.picker"
      :options="options"
      :id="sex.id"
      @change="pickerChange"
      required>
    </c-picker>
    <c-picker-date
      v-model="visible.date"
      :date="date"
      end="2090-05-26"
      @change="pickerDateChange" />
    <c-picker-daterange
      v-model="visible.daterange"
      :daterange="daterange"
      l-start="2019-06-01"
      l-end="2019-06-07"
      r-start="2019-08-26"
      r-end="2039-01-26"
      @change="pickerDaterangeChange"
      placeholder="请选择开始和结束时间" />
  </div>
</template>

<script>
import cInputGroup from '../../../packages/components/input-group/input-group.vue'
import cInput from '../../../packages/components/input-group/input.vue'
import cInputHead from '../../../packages/components/input-group/input-head.vue'
import cInputBody from '../../../packages/components/input-group/input-body.vue'
import cText from '../../../packages/components/text/text.vue'
import cPicker from '../../../packages/components/picker/picker.vue'
import cPickerRegion from '../../../packages/components/picker/picker-region.vue'
import cPickerDate from '../../../packages/components/picker/picker-date.vue'
import cPickerDaterange from '../../../packages/components/picker/picker-daterange.vue'

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
      sex: {
        id: 1,
        name: '男滴'
      },
      options: [
        {
          id: 1,
          name: '男滴'
        },
        {
          id: 2,
          name: '女滴'
        }
      ],
      date: null,
      visible: {
        pickerRegion: false,
        picker: false,
        date: false,
        daterange: false
      },
      daterange: [
        '2019-01-01',
        '2020-02-02'
      ]
    }
  },
  components: {
    cInputGroup,
    cInput,
    cInputHead,
    cInputBody,
    cText,
    cPicker,
    cPickerRegion,
    cPickerDate,
    cPickerDaterange
  },
  methods: {
    pickerRegionChange (e) {
      [
        this.province,
        this.city,
        this.district
      ] = e

      console.log(e)
    },
    pickerChange (e) {
      this.sex = e
    },
    pickerDateChange (e) {
      this.date = e
    },
    pickerDaterangeChange (e) {
      this.daterange = e
    }
  }
}
</script>

<style>
  .v-picker-region {
    margin-top: 15px;
  }
  page {
    background: #f2f2f2;
  }
</style>
