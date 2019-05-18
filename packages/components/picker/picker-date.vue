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
            {{ item }}月
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in days"
            :key="index">
            {{ item }}日
          </div>
        </picker-view-column>
        <!-- <picker-view-column>
          <div
            v-for="(item, index) in hours"
            :key="index">
            {{ item }}时
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in minutes"
            :key="index">
            {{ item }}分
          </div>
        </picker-view-column> -->
        <!-- <picker-view-column>
          <div
            v-for="(item, index) in seconds"
            :key="index">
            {{ item }}秒
          </div>
        </picker-view-column> -->
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
      days: [],
      hours: [],
      minutes: [],
      seconds: []
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
      let indexs = this.getIndexs(this.date)
      this.setYears()
      this.setMonths()
      this.setDays()

      setTimeout(() => {
        this.indexs = indexs
      }, 100)
    },
    onChange (e) {
      if (e.detail.value[2] !== this.indexs[2]) {
        this.indexs = e.detail.value
        return
      }
      if (e.detail.value[1] !== this.indexs[1]) {
        this.setDays(e.detail.value)
        this.indexs = [
          e.detail.value[0],
          e.detail.value[1],
          0
        ]
        return
      }
      if (e.detail.value[0] !== this.indexs[0]) {
        this.setMonths(e.detail.value)
        this.indexs = [
          e.detail.value[0],
          0,
          0
        ]
        return
      }
    },
    setMinMax (date) {
      let minYear = this.begin
        ? this.getYear(this.begin)
        : 1970
      let maxYear = this.end
        ? this.getYear(this.end)
        : 2100
      let currentYear = date
        ? this.getYear(date)
        : minYear
      let minMonth = this.begin && currentYear === minYear
        ? this.getMonth(this.begin)
        : 1
      let maxMonth = this.end && currentYear === maxYear
        ? this.getMonth(this.end)
        : 12
      let currentMonth = date
        ? this.getMonth(date)
        : minMonth
      let minDay = this.begin && currentYear === minYear && currentMonth === minMonth
        ? this.getDay(this.begin)
        : 1
      let maxDay = this.begin && currentYear === maxYear && currentMonth === maxMonth
        ? this.getDay(this.begin)
        : new Date(currentYear, currentMonth, 0).getDate()
      let currentDay = date
        ? this.getDay(date)
        : minDay
      return {
        minYear,
        maxYear,
        currentYear,
        minMonth,
        maxMonth,
        currentMonth,
        minDay,
        maxDay,
        currentDay
      }
    },
    setYears () {
      let {
        minYear,
        maxYear
      } = this.setMinMax()
      let years = []
      for (let i = minYear; i <= maxYear; i++) {
        years.push(i)
      }
      this.years = years
    },
    setMonths (indexs) {
      console.log('set-months')
      let date = this.getDate(indexs)
      let {
        minMonth,
        maxMonth
      } = this.setMinMax(date)
      let months = []
      for (let i = minMonth; i <= maxMonth; i++) {
        months.push(i)
      }
      this.months = months
    },
    setDays (indexs) {
      console.log('set-days')
      let date = this.getDate(indexs)
      console.log(date)
      console.log(indexs)
      let {
        minDay,
        maxDay
      } = this.setMinMax(date)
      let days = []
      for (let i = minDay; i <= maxDay; i++) {
        days.push(i)
      }
      this.days = days
    },
    getYear (date) {
      return new Date(date).getFullYear()
    },
    getMonth (date) {
      return new Date(date).getMonth() + 1
    },
    getDay (date) {
      return new Date(date).getDate()
    },
    getIndexs (date) {
      if (date === null || typeof date === 'undefined') {
        return [0, 0, 0]
      } else {

      }
    },
    getDate (indexs) {
      let year = indexs && typeof indexs[0] === 'number'
        ? this.years[indexs[0]]
        : null
      let month = indexs && typeof indexs[1] === 'number'
        ? this.months[indexs[1]]
        : null
      let day = indexs && typeof indexs[2] === 'number'
        ? this.days[indexs[2]]
        : null
      if (year && month && day) {
        return `${year}-${month}-${day}`
      } else {
        return null
      }
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
    }
  }
}
</script>
