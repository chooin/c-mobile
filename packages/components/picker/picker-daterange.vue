<template>
  <div
    class="c-picker-daterange"
    :class="{
      'c-picker-daterange__visible': _value
    }">
    <div class="c-picker-daterange__content">
      <div class="c-picker-daterange__action">
        <div v-if="placeholder" class="c-picker-daterange__placeholder">{{ placeholder }}</div>
        <div v-else class="c-picker-daterange__cancel" @click="onCancel">取消</div>
        <div class="c-picker-daterange__done" @click="onDone">完成</div>
      </div>
      <picker-view
        indicator-class="indicator-style"
        :value="indexs"
        @change="onChange">
        <picker-view-column>
          <div
            v-for="(item, index) in lYears"
            :key="index">
            {{ item }}年
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in lMonths"
            :key="index">
            {{ item | formatMMDD }}月
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in lDays"
            :key="index">
            {{ item | formatMMDD }}日
          </div>
        </picker-view-column>
        <div class="separator"><i>{{ separator }}</i></div>
        <picker-view-column>
          <div
            v-for="(item, index) in rYears"
            :key="index">
            {{ item }}年
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in rMonths"
            :key="index">
            {{ item | formatMMDD }}月
          </div>
        </picker-view-column>
        <picker-view-column>
          <div
            v-for="(item, index) in rDays"
            :key="index">
            {{ item | formatMMDD }}日
          </div>
        </picker-view-column>
      </picker-view>
    </div>
    <i class="c-picker-daterange__cover" @touchstart="onCancel"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isUpdated: true,
      indexs: [],
      lYears: [],
      rYears: [],
      lMonths: [],
      rMonths: [],
      lDays: [],
      rDays: [],

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
    daterange: {
      type: Array,
      default: null
    },
    lStart: {
      type: String,
      default: null
    },
    lEnd: {
      type: String,
      default: null
    },
    rStart: {
      type: String,
      default: null
    },
    rEnd: {
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
    },
    separator: {
      type: String,
      default: '至'
    }
  },
  methods: {
    initData () {
      this.isUpdated = false

      let lY
      let lM
      let lD
      let rY
      let rM
      let rD
      if (this.daterange && this.daterange[0] && this.daterange[1]) {
        lY = this.daterange[0].split('-')[0]
        lM = this.daterange[0].split('-')[1]
        lD = this.daterange[0].split('-')[2]
        rY = this.daterange[1].split('-')[0]
        rM = this.daterange[1].split('-')[1]
        rD = this.daterange[1].split('-')[2]
      }

      this.lYears = this.getYears({
        type: 'l'
      })
      this.rYears = this.getYears({
        type: 'r'
      })
      let lYIndex = this.getIndex({ item: lY, items: this.lYears })
      let rYIndex = this.getIndex({ item: rY, items: this.rYears })
      let lYear = this.lYears[lYIndex]
      let rYear = this.rYears[rYIndex]

      this.lMonths = this.getMonths({
        type: 'l',
        year: lYear
      })
      this.rMonths = this.getMonths({
        type: 'r',
        year: rYear
      })
      let lMIndex = this.getIndex({ item: lM, items: this.lMonths })
      let rMIndex = this.getIndex({ item: rM, items: this.rMonths })
      let lMonth = this.lMonths[lMIndex]
      let rMonth = this.rMonths[rMIndex]

      this.lDays = this.getDays({
        type: 'l',
        year: lYear,
        month: lMonth
      })
      this.rDays = this.getDays({
        type: 'r',
        year: rYear,
        month: rMonth
      })
      let lDIndex = this.getIndex({ item: lD, items: this.lDays })
      let rDIndex = this.getIndex({ item: rD, items: this.rDays })

      setTimeout(() => {
        this.indexs = [
          lYIndex,
          lMIndex,
          lDIndex,
          rYIndex,
          rMIndex,
          rDIndex
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
      if (e.detail.value[5] !== this.indexs[5]) {
        this.indexs = e.detail.value
        return
      }
      if (e.detail.value[1] !== this.indexs[1]) {
        let [
          lYIndex,
          lMIndex,
          lDIndex,
          rYIndex,
          rMIndex,
          rDIndex
        ] = e.detail.value
        let lODIndex = this.indexs[2]

        let lYear = this.lYears[lYIndex]
        let lMonth = this.lMonths[lMIndex]
        let lODay = this.lDays[lODIndex]
        let lDays = this.getDays({
          type: 'l',
          year: lYear,
          month: lMonth
        })
        lDIndex = this.getIndex({ item: lODay, items: lDays })
        if (lDays.toString() !== this.lDays.toString()) {
          this.lDays = lDays
        }
        if (lDIndex !== lODIndex) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            lYIndex,
            lMIndex,
            0,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        }

        setTimeout(() => {
          this.indexs = [
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        })
        return
      }
      if (e.detail.value[4] !== this.indexs[4]) {
        let [
          lYIndex,
          lMIndex,
          lDIndex,
          rYIndex,
          rMIndex,
          rDIndex
        ] = e.detail.value
        let rODIndex = this.indexs[5]

        let rYear = this.rYears[rYIndex]
        let rMonth = this.rMonths[rMIndex]
        let rODay = this.rDays[rODIndex]
        let rDays = this.getDays({
          type: 'r',
          year: rYear,
          month: rMonth
        })
        rDIndex = this.getIndex({ item: rODay, items: rDays })
        if (rDays.toString() !== this.rDays.toString()) {
          this.rDays = rDays
        }
        if (rDIndex !== rODIndex) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            rMIndex,
            0,
          ]
        }

        setTimeout(() => {
          this.indexs = [
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        })
        return
      }
      if (e.detail.value[0] !== this.indexs[0]) {
        let [
          lYIndex,
          lMIndex,
          lDIndex,
          rYIndex,
          rMIndex,
          rDIndex
        ] = e.detail.value
        let lOMIndex = this.indexs[1]
        let lODIndex = this.indexs[2]

        let lYear = this.lYears[lYIndex]
        let lOMonth = this.lMonths[lOMIndex]
        let lODay = this.lDays[lODIndex]
        let lMonths = this.getMonths({
          type: 'l',
          year: lYear
        })
        lMIndex = this.getIndex({ item: lOMonth, items: lMonths })
        let lMonth = lMonths[lMIndex]
        let lDays = this.getDays({
          type: 'l',
          year: lYear,
          month: lMonth
        })
        lDIndex = this.getIndex({ item: lODay, items: lDays })

        if (lMonths.toString() !== this.lMonths.toString()) {
          this.lMonths = lMonths
        }
        if (lDays.toString() !== this.lDays.toString()) {
          this.lDays = lDays
        }
        if (
          lMIndex !== lOMIndex ||
          lDIndex !== lODIndex
        ) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            lYIndex,
            0,
            0,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        }

        setTimeout(() => {
          this.indexs = [
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        })
        return
      }
      if (e.detail.value[3] !== this.indexs[3]) {
        let [
          lYIndex,
          lMIndex,
          lDIndex,
          rYIndex,
          rMIndex,
          rDIndex
        ] = e.detail.value
        let rOMIndex = this.indexs[4]
        let rODIndex = this.indexs[5]

        let rYear = this.rYears[rYIndex]
        let rOMonth = this.rMonths[rOMIndex]
        let rODay = this.rDays[rODIndex]
        let rMonths = this.getMonths({
          type: 'r',
          year: rYear
        })
        rMIndex = this.getIndex({ item: rOMonth, items: rMonths })
        let rMonth = rMonths[rMIndex]
        let rDays = this.getDays({
          type: 'r',
          year: rYear,
          month: rMonth
        })
        rDIndex = this.getIndex({ item: rODay, items: rDays })

        if (rMonths.toString() !== this.rMonths.toString()) {
          this.rMonths = rMonths
        }
        if (rDays.toString() !== this.rDays.toString()) {
          this.rDays = rDays
        }
        if (
          rMIndex !== rOMIndex ||
          rDIndex !== rODIndex
        ) {
          this.indexs = [ // 修复 picker 中 div 个数不够导致无法定位的问题
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            0,
            0
          ]
        }

        setTimeout(() => {
          this.indexs = [
            lYIndex,
            lMIndex,
            lDIndex,
            rYIndex,
            rMIndex,
            rDIndex
          ]
        })
        return
      }
    },
    onDone () {
      let [
        lYIndex,
        lMIndex,
        lDIndex,
        rYIndex,
        rMIndex,
        rDIndex
      ] = this.indexs
      let Megalo = Megalo || wx
      let lDate = `${this.lYears[lYIndex]}-${this.plusZero(this.lMonths[lMIndex])}-${this.plusZero(this.lDays[lDIndex])}`
      let rDate = `${this.rYears[rYIndex]}-${this.plusZero(this.rMonths[rMIndex])}-${this.plusZero(this.rDays[rDIndex])}`
      if (Date.parse(lDate) > Date.parse(rDate)) {
        let toast = '开始日期不能大于结束日期'
        Megalo.showToast(toast)
        return
      }
      this.$emit('change', [
        lDate,
        rDate
      ])
      this._value = false
      this.isUpdated = true
    },
    onCancel () {
      this._value = false
      this.isUpdated = true
    },
    getYears ({
      type
    }) { // 获取有多少个年
      let start = type === 'l' ? this._lStart : this._rStart
      let end = type === 'l' ? this._lEnd : this._rEnd
      let minYear = 1970
      let maxYear = 2100

      if (start) {
        let [
          y
        ] = start.split('-')
        minYear = parseInt(y, 10)
      }
      if (end) {
        let [
          y
        ] = end.split('-')
        maxYear = parseInt(y, 10)
      }

      let years = []
      for (let i = minYear; i <= maxYear; i++) {
        years.push(i)
      }
      return years
    },
    getMonths ({
      type,
      year
    }) { // 获取当前年下有多少个月
      let start = type === 'l' ? this._lStart : this._rStart
      let end = type === 'l' ? this._lEnd : this._rEnd
      let beginTime = null
      if (start) {
        let [
          y,
          m
        ] = start.split('-')
        beginTime = Date.parse(`${y}-${this.plusZero(m)}-01`)
      }
      let endTime = null
      if (end) {
        let [
          y,
          m
        ] = end.split('-')
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
      type,
      year,
      month
    }) { // 获取当前年月下有多少个天
      let start = type === 'l' ? this._lStart : this._rStart
      let end = type === 'l' ? this._lEnd : this._rEnd
      let beginTime = null
      if (start) {
        beginTime = Date.parse(start)
      }
      let endTime = null
      if (end) {
        endTime = Date.parse(end)
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
    _lStart () { // 时间格式错误返回空
      let lStart = this.lStart
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(lStart)
        ? lStart
        : null
    },
    _lEnd () { // 时间格式错误返回空
      let lEnd = this.lEnd
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(lEnd)
        ? lEnd
        : null
    },
    _rStart () { // 时间格式错误返回空
      let rStart = this.rStart
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(rStart)
        ? rStart
        : null
    },
    _rEnd () { // 时间格式错误返回空
      let rEnd = this.rEnd
      return /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(rEnd)
        ? rEnd
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
