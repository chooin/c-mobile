<template>
  <cover-view
    v-if="_coverView"
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      align ? `c-text__${align}`: '',
      className ? className : '',
      {
        'c-text__light': light,
        'c-text__block': block,
        'c-text__cursor': cursor,
        'c-text__empty': isEmpty,
        'c-text__placeholder': isPlaceholder,
        'c-text__next': next
      }
    ]"
    :style="componentStyle"
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
      <cover-view :style="componentStyle" class="c-text__content">{{ placeholder }}</cover-view>
    </template>
    <cover-view v-else :style="componentStyle" class="c-text__content">
      <slot>{{ text }}</slot>
    </cover-view>
  </cover-view>
  <div
    v-else
    class="c-text"
    :class="[
      type ? `c-text__${type}` : '',
      align ? `c-text__${align}`: '',
      className ? className : '',
      {
        'c-text__light': light,
        'c-text__block': block,
        'c-text__cursor': cursor,
        'c-text__empty': isEmpty,
        'c-text__placeholder': isPlaceholder,
        'c-text__next': next
      }
    ]"
    :style="componentStyle"
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
      <span :style="componentStyle" class="c-text__content">{{ placeholder }}</span>
    </template>
    <span v-else :style="componentStyle" class="c-text__content">
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
    },
    className: {
      type: String,
      default: null
    },
    componentStyle: {
      type: Object,
      default: () => {}
    },
    style: {
      type: Object,
      default: () => {}
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
    _coverView: {
      get () {
        return this.coverView || this.$parent.coverView || false
      }
    }
  },
  mounted () {
    this.setIsEmptyOrIsPlaceholder()
  },
  beforeUpdate () {
    this.setIsEmptyOrIsPlaceholder()
  }
}
</script>
