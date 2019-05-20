<template>
  <div
    class="c-picker-date"
    :class="{
      'c-picker-date__is-iphonex': isMiniProgramIsIPhoneX,
      'c-picker-date__visible': _value
    }">
    <div class="c-picker-date__content">
      <div class="c-picker-date__action">
        <div class="c-picker-date__cancel" @click="onCancel">取消</div>
        <div class="c-picker-date__done" @click="onDone">完成</div>
      </div>
      <picker-view
        indicator-class="indicator-style"
        :value="indexs"
        @change="onChange">
        <picker-view-column>
          <div
            v-for="(item, index) in years"
            :key="index">
            {{ item }}年
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in months"
            :key="index">
            {{ item | formatMMDD }}月
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in days"
            :key="index">
            {{ item | formatMMDD }}日
          </div>
        </picker-view-column>
      </picker-view>
    </div>
    <i class="c-picker-date__cover" @touchstart="onCancel"></i>
  </div>
</template>

<script>
import { isMiniProgramIsIPhoneX } from '../../utils/device'

export default {
  data () {
    return {
      isMiniProgramIsIPhoneX,
      isUpdated: true,
      indexs: [],
      years: [],
      months: [],
      days: []
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    date: {
      type: String,
      default: null
    },
    begin: {
      type: String,
      default: null
    },
    end: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      default: 'YMD'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initData () {
      this.isUpdated = false

      let y
      let m
      let d
      if (this.date) {
        [
          y,
          m,
          d
        ] = this.date.split('-')
      }

      this.years = this.getYears()
      let yIndex = this.getIndex({ item: y, items: this.years })
      let year = this.years[yIndex]

      this.months = this.getMonths({
        year
      })
      let mIndex = this.getIndex({ item: m, items: this.months })
      let month = this.months[mIndex]

      this.days = this.getDays({
        year,
        month
      })
      let dIndex = this.getIndex({ item: d, items: this.days })

      let indexs = [
        yIndex,
        mIndex,
        dIndex
      ]

      setTimeout(() => {
        this.indexs = indexs
      }, 100)
    },
    getIndex ({
      item,
      items
    }) {
      if (
        item &&
        items &&
        Array.isArray(items)
      ) {
        item = parseInt(item)
        return items.findIndex(v => v === item) === -1
          ? 0
          : items.findIndex(v => v === item)
      }
      return 0
    },
    onChange (e) {
      if (e.detail.value[2] !== this.indexs[2]) {
        setTimeout(() => {
          this.indexs = e.detail.value
        }, 100)
        return
      }
      if (e.detail.value[1] !== this.indexs[1]) {
        let [
          yIndex,
          mIndex,
          dIndex
        ] = e.detail.value
        let [
          ,
          ,
          oDIndex
        ] = this.indexs

        let year = this.years[yIndex]
        let month = this.months[mIndex]
        let oDay = this.days[oDIndex]
        this.days = this.getDays({
          year,
          month
        })
        dIndex = this.getIndex({ item: oDay, items: this.days })

        let indexs = [
          yIndex,
          mIndex,
          dIndex
        ]

        setTimeout(() => {
          this.indexs = indexs
        }, 100)
        return
      }
      if (e.detail.value[0] !== this.indexs[0]) {
        let [
          yIndex,
          mIndex,
          dIndex
        ] = e.detail.value
        let [
          ,
          oMIndex,
          oDIndex
        ] = this.indexs

        let year = this.years[yIndex]
        let oMonth = this.months[oMIndex]
        let oDay = this.days[oDIndex]
        this.months = this.getMonths({
          year
        })
        mIndex = this.getIndex({ item: oMonth, items: this.months })
        let month = this.months[mIndex]
        this.days = this.getDays({
          year,
          month
        })
        dIndex = this.getIndex({ item: oDay, items: this.days })

        let indexs = [
          yIndex,
          mIndex,
          dIndex
        ]

        setTimeout(() => {
          this.indexs = indexs
        }, 100)
        return
      }
    },
    onDone () {
      let [
        yIndex,
        mIndex,
        dIndex
      ] = this.indexs
      this.$emit('change', `${this.years[yIndex]}-${this.plusZero(this.months[mIndex])}-${this.plusZero(this.days[dIndex])}`)
      this._value = false
      this.isUpdated = true
    },
    onCancel () {
      this._value = false
      this.isUpdated = true
    },
    getYears () { // 获取有多少个年
      let minYear = 1970
      let maxYear = 2100

      if (this.begin) {
        let [
          y
        ] = this.begin.split('-')
        minYear = parseInt(y, 10)
      }
      if (this.end) {
        let [
          y
        ] = this.end.split('-')
        maxYear = parseInt(y, 10)
      }

      let years = []
      for (let i = minYear; i <= maxYear; i++) {
        years.push(i)
      }
      return years
    },
    getMonths ({
      year
    }) { // 获取当前年下有多少个月
      let beginTime = null
      if (this.begin) {
        let [
          y,
          m
        ] = this.begin.split('-')
        beginTime = Date.parse(`${y}-${this.plusZero(m)}-01`)
      }
      let endTime = null
      if (this.end) {
        let [
          y,
          m
        ] = this.end.split('-')
        endTime = Date.parse(`${y}-${this.plusZero(m)}-01`)
      }
      let months = []
      for (let i = 1; i <= 12; i++) {
        let currentTime = Date.parse(`${year}-${this.plusZero(i)}-01`)
        if (beginTime && endTime) {
          if (
            beginTime <= currentTime &&
            endTime >= currentTime
          ) {
            months.push(i)
          }
        } else if (beginTime && !endTime) {
          if (beginTime <= currentTime) {
            months.push(i)
          }
        } else if (!beginTime && endTime) {
          if (endTime >= currentTime) {
            months.push(i)
          }
        } else {
          months.push(i)
        }
      }
      return months
    },
    getDays ({
      year,
      month
    }) { // 获取当前年月下有多少个天
      let beginTime = null
      if (this.begin) {
        beginTime = Date.parse(this.begin)
      }
      let endTime = null
      if (this.end) {
        endTime = Date.parse(this.end)
      }
      let days = []
      for (let i = 1; i <= 31; i++) {
        let currentTime = Date.parse(`${year}-${this.plusZero(month)}-${this.plusZero(i)}`)
        if (beginTime && endTime) {
          if (
            beginTime <= currentTime &&
            endTime >= currentTime
          ) {
            days.push(i)
          }
        } else if (beginTime && !endTime) {
          if (beginTime <= currentTime) {
            days.push(i)
          }
        } else if (!beginTime && endTime) {
          if (endTime >= currentTime) {
            days.push(i)
          }
        } else {
          days.push(i)
        }
      }
      return days
    },
    plusZero (n) {
      n = parseInt(n)
      return n < 10
        ? `0${n}`
        : String(n)
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
        }
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  filters: {
    formatMMDD: (n) => {
      n = parseInt(n)
      return n < 10
        ? `0${n}`
        : String(n)
    }
  }
}
</script>
