<template>
  <button
    class="c-btn"
    type="button"
    :class="[
      type ? `c-btn__${type}` : '',
      {
        'c-btn__o': o,
        'c-btn__disabled': disabled,
        'c-btn__suspend': suspend,
        'c-btn__small': small,
        'c-btn__icon': icon
      }
    ]"
    @click="handleClick">
    <span class="c-btn__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { to, getObjectType } from '../../utils'

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
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      div: null
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      this.suspend &&
      document.querySelectorAll('.c-btn__suspend__cover').length === 0
    ) {
      this.div = document.createElement('div')
      this.div.className = 'c-btn__suspend__cover'
      if (getObjectType(this.cover) === 'Number') {
        this.div.style.height = `${this.cover}px`
      } else if (getObjectType(this.cover) === 'String') {
        this.div.style.height = this.cover
      }
      document.body.appendChild(this.div)
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
  beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove()
  }
}
</script>
