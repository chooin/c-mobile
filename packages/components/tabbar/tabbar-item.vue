<template>
  <a
    class="c-tabbar-item"
    :class="{
      current
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
import { to } from '../../units'
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
      to(this)
    }
  }
}
</script>
