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
              placeholder: item.id === 0
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
import {
  isMiniProgramIsIPhoneX
} from '../../utils'

export default {
  data () {
    return {
      isMiniProgramIsIPhoneX,
      indexs: []
    }
  },
  props: {
    value: {
      type: Number,
      default: true
    },
    id: {
      type: Number,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let indexs = [
        this.id
      ]
      setTimeout(() => {
        this.indexs = indexs
      })
    },
    onCancel () {
      this.initData()

      this._value = false
    },
    onDone () {
      if (
        this.indexs[0]
      ) {
        this._value = false
        this.$emit('change', this.options[this.indexs[0]])
      } else {
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
          wx.showToast(toast)
        }
      }
    },
    onChange (e) {
      this.indexs = e.detail.value
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
    },
    _options () {
      return [
        {
          id: 0,
          name: '请选择'
        },
        ...this.options
      ]
    }
  }
}
</script>
