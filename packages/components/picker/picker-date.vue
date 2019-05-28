<template>
  <div
    class="c-picker-date"
    :class="{
      'c-picker-date__is-iphonex': isMiniProgramIsIPhoneX,
      'c-picker-date__visible': _value
    }">
    <div class="c-picker-date__content">
      <div class="c-picker-date__action">
        <div v-if="placeholder" class="c-picker-date__placeholder">{{ placeholder }}</div>
        <div v-else class="c-picker-date__cancel" @click="onCancel">取消</div>
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
    begin: { // 即将废弃
      type: String,
      default: null
    },
    start: {
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
    },
    placeholder: {
      type: String,
      default: null
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

      setTimeout(() => {
        this.indexs = [
          yIndex,
          mIndex,
          dIndex
        ]
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
        this.indexs = e.detail.value
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
        let days = this.getDays({
          year,
          month
        })
        dIndex = this.getIndex({ item: oDay, items: days })
        if (days.toString() !== this.days.toString()) {
          this.days = days
        }
        if (dIndex !== oDIndex) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            yIndex,
            mIndex,
            0
          ]
        }

        setTimeout(() => {
          this.indexs = [
            yIndex,
            mIndex,
            dIndex
          ]
        })
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
        let months = this.getMonths({
          year
        })
        mIndex = this.getIndex({ item: oMonth, items: months })
        let month = months[mIndex]
        let days = this.getDays({
          year,
          month
        })
        dIndex = this.getIndex({ item: oDay, items: days })

        if (months.toString() !== this.months.toString()) {
          this.months = months
        }
        if (days.toString() !== this.days.toString()) {
          this.days = days
        }
        if (
          mIndex !== oMIndex ||
          dIndex !== oDIndex
        ) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            yIndex,
            0,
            0
          ]
        }

        setTimeout(() => {
          this.indexs = [
            yIndex,
            mIndex,
            dIndex
          ]
        })
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

      if (this._start) {
        let [
          y
        ] = this._start.split('-')
        minYear = parseInt(y, 10)
      }
      if (this._end) {
        let [
          y
        ] = this._end.split('-')
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
      if (this._start) {
        let [
          y,
          m
        ] = this._start.split('-')
        beginTime = Date.parse(`${y}-${this.plusZero(m)}-01`)
      }
      let endTime = null
      if (this._end) {
        let [
          y,
          m
        ] = this._end.split('-')
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
      if (this._start) {
        beginTime = Date.parse(this._start)
      }
      let endTime = null
      if (this._end) {
        endTime = Date.parse(this._end)
      }
      let days = []
      for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
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
    },
    _start () { // 时间格式错误返回空
      let start = this.start || this.begin
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(start)
        ? start
        : null
    },
    _end () { // 时间格式错误返回空
      let end = this.end
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(end)
        ? end
        : null
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
