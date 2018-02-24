<template>
  <div
    :class="[
      type ? `c-btn__${type}` : '',
      o ? 'c-btn__o' : 'c-btn',
      {
        'c-btn__disabled': disabled,
        'c-btn__suspend': suspend,
        'c-btn__small': small,
        'c-btn__is-iphonex': isIPhoneX
      }
    ]"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { to, isIPhoneX, getObjectType } from '../../utils'
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
    }
  },
  data () {
    return {
      isIPhoneX,
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
      this.div.style.width = '100%'
      let coverType = getObjectType(this.cover)
      if (coverType === 'Number') {
        this.div.style.height = `${this.cover}rem`
      } else if (coverType === 'String') {
        this.div.style.height = this.cover
      } else {
        this.div.style.height = this.isIPhoneX ? '8.4rem' : '5rem'
      }
      this.div.className = 'c-btn__suspend__cover'
      document.body.appendChild(this.div)
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      to(this)
    }
  },
  beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove()
  }
}
</script>
