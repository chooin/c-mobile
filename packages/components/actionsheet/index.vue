<template>
  <div
    class="c-actionsheet"
    :class="{
      'c-actionsheet__visible': value,
      'c-actionsheet__is-iphonex': isIPhoneX,
      'c-actionsheet__has-title': title || description,
      'c-actionsheet__actions-empty': Array.isArray(actions) && actions.length === 0
    }"
    @click="cancelClick">
    <div
      class="c-actionsheet__content">
      <div
        class="c-actionsheet__header"
        @click.stop="() => {}">
        <h5 class="c-actionsheet__title" v-if="title">
          {{ title }}
        </h5>
        <p class="c-actionsheet__description" v-if="description">
          {{ description }}
        </p>
      </div>
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
      <div class="c-actionsheet__cancel" @click.stop="cancelClick">
        {{ cancelText }}
      </div>
    </div>
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
    title: {
      type: String
    },
    description: {
      type: String
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
