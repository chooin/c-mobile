<template>
  <a
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      align ? `c-text__${align}`: '',
      {
        'c-text__light': light,
        'c-text__block': block,
        'c-text__cursor': cursor,
        'c-text__empty':
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === null ||
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === undefined ||
          text || ($slots.default && $slots.default[0] && $slots.default[0].text) === '',
        'c-text__placeholder':
          placeholder !== undefined &&
          placeholder !== null &&
          (
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === null ||
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === undefined ||
            text || ($slots.default && $slots.default[0] && $slots.default[0].text) === ''
          )
      }
    ]"
    :style="{
      fontFamily,
      fontSize: _fontSize
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
    <span class="c-text__content" v-else>
      <slot>{{ text }}</slot>
    </span>
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
    },
    cursor: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: [Number, String],
      default: null
    },
    align: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    _fontSize () {
      return isNaN(this.fontSize)
        ? this.fontSize
        : `${this.fontSize}px`
    }
  }
}
</script>
