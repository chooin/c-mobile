<template>
  <i
    class="c-icon"
    :class="[
      `icon-${name}`,
      type ? `c-icon__${type}` : '',
      {
        'c-icon__has-background': backgroundColor
      }
    ]"
    :style="{
      width: size,
      height: size,
      fontSize: size,
      backgroundColor,
      color: backgroundColor ? ('#fff' || color) : null,
      borderRadius: borderRadius
                    ? borderRadius
                    : (
                        round
                        ? round
                        : '.3rem'
                      )
    }"
    @click="handleClick">
  </i>
</template>

<script>
import { to } from '../../utils'
export default {
  name: 'cIcon',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: String
    },
    to: {
      type: [String, Object],
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
