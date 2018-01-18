<template>
  <div
    class="c-actionsheet"
    :class="{
      'c-actionsheet__visible': value,
      'is-iphonex': isIPhoneX
    }"
    @click="cancelClick">
    <div class="c-actionsheet__content">
      <div class="c-actionsheet__actions">
        <ul>
          <li
            v-for="(item, index) in actions"
            :key="index"
            @click.stop="actionClick(item)"
            :style="{
              color: item.color
            }">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="c-actionsheet__cancel" @click.stop="cancelClick">{{ cancelText }}</div>
    </div>
    <input type="hidden" v-model="value">
  </div>
</template>

<script>
import { isIPhoneX } from '../../utils'
export default {
  name: 'cActionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isIPhoneX
    }
  },
  methods: {
    actionClick (item) {
      item.click()
      this._value = false
    },
    cancelClick () {
      this._value = false
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
