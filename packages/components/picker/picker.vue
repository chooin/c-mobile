<template>
  <div
    class="c-picker"
    :class="{
      'c-picker__is-iphonex': isMiniProgramIsIPhoneX,
      'c-picker__visible': _value
    }">
    <div class="c-picker__content">
      <div class="c-picker__action">
        <div class="c-picker__cancel" @click="onCancel">取消</div>
        <div class="c-picker__done" @click="onDone">完成</div>
      </div>
      <picker-view
        indicator-class="indicator-style"
        :value="indexs"
        @change="onChange">
        <picker-view-column>
          <div
            v-for="(item, index) in _options"
            :key="index"
            :class="{
              placeholder: item.id === null
            }">
            {{ item.name }}
          </div>
        </picker-view-column>
      </picker-view>
    </div>
    <i class="c-picker__cover" @touchstart="onCancel"></i>
  </div>
</template>

<script>
import { isMiniProgramIsIPhoneX } from '../../utils/device'

export default {
  data () {
    return {
      isMiniProgramIsIPhoneX,
      isUpdated: true,
      indexs: []
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    id: {
      type: Number,
      default: null
    },
    options: {
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
      let indexs = this.getIndexs(this.id)

      setTimeout(() => {
        this.indexs = indexs
      }, 100)
    },
    onCancel () {
      this._value = false
      this.isUpdated = true
    },
    onDone () {
      let index = this.indexs[0]
      if (
        index
      ) {
        this._value = false
        this.isUpdated = true
        this.$emit('change', this._options[index])
      } else {
        if (this.required) {
          let Megalo = Megalo || false
          let title = '请选择'
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
          }
        } else {
          this._value = false
          this.isUpdated = true
          this.$emit('change', {
            id: null,
            name: null
          })
        }
      }
    },
    onChange (e) {
      this.indexs = e.detail.value
    },
    getIndexs (id) {
      let indexs = []
      if (id === null || typeof id === 'undefined') {
        return [
          0
        ]
      } else {
        let index = this._options.findIndex(item => item.id === id)
        indexs.push(index)
      }
      return indexs
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
    _options () {
      return [
        {
          id: null,
          name: '请选择'
        },
        ...this.options
      ]
    }
  }
}
</script>
