<template>
  <a
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      {
        'c-text__light':
        light ||
        (
          placeholder !== undefined &&
          placeholder !== null &&
          (
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === null ||
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === undefined ||
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === ''
          )
        ),
        'c-text__block': block
      }
    ]"
    :style="{
      fontFamily
    }"
    @click="handleClick">
    <template
      v-if="
        placeholder !== undefined &&
        placeholder !== null &&
        (
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === null ||
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === undefined ||
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === ''
        )
      ">
      {{ placeholder }}
    </template>
    <slot v-else>{{ text }}</slot>
  </a>
</template>

<script>
import { to } from '../../utils'
export default {
  name: 'cText',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    fontFamily: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
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
