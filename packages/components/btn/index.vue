<template>
  <div
    :class="[
      type ? `c-btn__${type}` : '',
      o ? 'c-btn__o' : 'c-btn',
      {
        'c-btn__disabled': disabled,
        'c-btn__suspend': suspend,
        'c-btn__small': small
      }
    ]"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { to } from '../../units'
export default {
  name: 'cBtn',
  props: {
    type: {
      type: String,
      default: ''
    },
    o: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    suspend: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      to(this)
    }
  }
}
</script>
