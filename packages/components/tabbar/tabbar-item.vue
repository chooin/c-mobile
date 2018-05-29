<template>
  <a
    class="c-tabbar-item"
    :class="{
      'c-tabbar__current': current
    }"
    @click="handleClick">
    <slot>
      <c-icon v-show="icon" :name="icon" />
      <c-text v-show="text">{{ text }}</c-text>
    </slot>
    <b v-show="badge">{{ badge }}</b>
  </a>
</template>

<script>
import { to } from '../../utils'

export default {
  name: 'cTabbarItem',
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    current: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    badge: {
      type: Number,
      default: null
    }
  },
  methods: {
    handleClick () {
      to({
        vm: this,
        to: this.to
      })
    }
  }
}
</script>
