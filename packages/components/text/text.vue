<template>
  <cover-view
    v-if="_coverView"
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      align ? `c-text__${align}`: '',
      {
        'c-text__light': light,
        'c-text__block': block,
        'c-text__cursor': cursor,
        'c-text__empty': isEmpty,
        'c-text__placeholder': isPlaceholder,
        'c-text__next': next
      }
    ]"
    :style="{
      fontFamily,
      fontSize: _fontSize,
      color
    }"
    @click="onClick">
    <template
      v-if="
        text !== null &&
        text !== undefined &&
        text !== ''
      ">
      {{ text }}
    </template>
    <template v-else-if="isPlaceholder">
      <cover-view class="c-text__content">{{ placeholder }}</cover-view>
    </template>
    <cover-view v-else class="c-text__content">
      <slot>{{ text }}</slot>
    </cover-view>
  </cover-view>
  <div
    v-else
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      align ? `c-text__${align}`: '',
      {
        'c-text__light': light,
        'c-text__block': block,
        'c-text__cursor': cursor,
        'c-text__empty': isEmpty,
        'c-text__placeholder': isPlaceholder,
        'c-text__next': next
      }
    ]"
    :style="{
      fontFamily,
      fontSize: _fontSize,
      color
    }"
    @click="onClick">
    <template
      v-if="
        text !== null &&
        text !== undefined &&
        text !== ''
      ">
      {{ text }}
    </template>
    <template v-else-if="isPlaceholder">
      <span class="c-text__content">{{ placeholder }}</span>
    </template>
    <span v-else class="c-text__content">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
import to from '../../utils/to'

export default {
  name: 'cText',
  data () {
    return {
      isEmpty: false,
      isPlaceholder: false
    }
  },
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
    color: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    coverView: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      to({
        vm: this,
        to: this.to
      })
    },
    setIsEmptyOrIsPlaceholder () {
      let text =
        this.$slots.default &&
        this.$slots.default[0] &&
        this.$slots.default[0].text
      this.isEmpty =
        (
          text === null ||
          text === undefined ||
          text === ''
        ) &&
        (
          this.text === null ||
          this.text === undefined ||
          this.text === ''
        )
      this.isPlaceholder =
        this.placeholder !== undefined &&
        this.placeholder !== null &&
        this.isEmpty
    }
  },
  computed: {
    _fontSize () {
      if (this.fontSize) {
        if (isNaN(this.fontSize)) {
          return this.fontSize
        } else {
          return `${this.fontSize}px`
        }
      } else {
        return null
      }
    },
    _coverView: {
      get () {
        return this.coverView || this.$parent.coverView || false
      }
    }
  },
  created () {
    this.setIsEmptyOrIsPlaceholder()
  },
  beforeUpdate () {
    this.setIsEmptyOrIsPlaceholder()
  }
}
</script>
