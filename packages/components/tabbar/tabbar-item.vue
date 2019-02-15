<template>
  <div
    class="c-tabbar-item"
    :class="{
      'c-tabbar__current': current
    }"
    @click="onClick">
    <slot>
      <c-icon v-show="icon" :name="icon" />
      <c-text v-show="text">{{ text }}</c-text>
    </slot>
    <b v-show="badge">{{ badge }}</b>
  </div>
</template>

<script>
import to from '../../utils/to'

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
    onClick () {
      to({
        vm: this,
        to: this.to
      })
    }
  }
}
</script>
