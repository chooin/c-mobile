<template>
  <div
    class="c-picker"
    :class="{
      'c-picker__visible': _value
    }">
    <div class="c-picker__content">
      <div class="c-picker__action">
        <div v-if="placeholder" class="c-picker__placeholder">{{ placeholder }}</div>
        <div v-else class="c-picker__cancel" @click="onCancel">{{ cancelText }}</div>
        <div class="c-picker__done" @click="onDone">{{ doneText }}</div>
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
export default {
  data () {
    return {
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
    },
    placeholder: {
      type: String,
      default: null
    },
    doneText: {
      type: String,
      default: '完成'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    nullText: {
      type: String,
      default: '请选择'
    }
  },
  methods: {
    initData () {
      this.isUpdated = false

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
          let Megalo = Megalo || wx
          let title = this.nullText
          let toast = {
            title,
            icon: 'none',
            duration: 2000
          }
          Megalo.showToast(toast)
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
          name: this.nullText
        },
        ...this.options
      ]
    }
  }
}
</script>
