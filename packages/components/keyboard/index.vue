<template>
  <transition name="c-keyboard-transition">
    <div
      v-if="_value"
      class="c-keyboard">
      <div class="c-keyboard__done" v-if="description || doneText">
        <div class="c-keyboard__description">{{ description }}</div>
        <div class="c-keyboard__done-btn" @click="doneClick">{{ doneText }}</div>
      </div>
      <div class="c-keyboard__key-group">
        <c-keyboard-key text="1" @click="handleClick" />
        <c-keyboard-key text="2" @click="handleClick" />
        <c-keyboard-key text="3" @click="handleClick" />
      </div>
      <div class="c-keyboard__key-group">
        <c-keyboard-key text="4" @click="handleClick" />
        <c-keyboard-key text="5" @click="handleClick" />
        <c-keyboard-key text="6" @click="handleClick" />
      </div>
      <div class="c-keyboard__key-group">
        <c-keyboard-key text="7" @click="handleClick" />
        <c-keyboard-key text="8" @click="handleClick" />
        <c-keyboard-key text="9" @click="handleClick" />
      </div>
      <div class="c-keyboard__key-group">
        <c-keyboard-key :text="_typeText" class="c-keyboard__key-gray" @click="handleClick" />
        <c-keyboard-key text="0" @click="handleClick" />
        <c-keyboard-key class="c-keyboard__key-gray c-keyboard__key-delete" @click="handleDelete" />
      </div>
    </div>
  </transition>
</template>

<script>
import cKeyboardKey from './keyboard-key'

export default {
  name: 'cKeyboard',
  mounted () {
    if (typeof window.ontouchstart === 'undefined') {
      document.addEventListener('click', this.hideKeyboard, true)
    } else {
      document.addEventListener('touchstart', this.hideKeyboard, true)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'digit' // number，idcard，digit
    },
    description: {
      type: String,
      default: null
    },
    doneText: {
      type: String,
      default: null
    },
    allowHide: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('click', value)
    },
    handleDelete () {
      this.$emit('delete')
    },
    doneClick () {
      if (this.allowHide) {
        this._value = false
        this.$emit('hide')
      }
      this.$emit('done')
    },
    hideKeyboard (e) {
      if (
        this.allowHide &&
        this._value !== false &&
        e.target.className.indexOf('c-keyboard') === -1
      ) {
        this._value = false
        this.$emit('hide')
      }
    }
  },
  computed: {
    _typeText: {
      get () {
        if (this.type === 'number') {
          return ''
        } else if (this.type === 'idcard') {
          return 'X'
        } else {
          return '.'
        }
      }
    },
    _value: {
      get () {
        return this.allowHide ? this.value : true
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  components: {
    cKeyboardKey
  },
  beforeDestroy () {
    if (typeof window.ontouchstart === 'undefined') {
      document.removeEventListener('click', this.hideKeyboard, true)
    } else {
      document.removeEventListener('touchstart', this.hideKeyboard, true)
    }
  }
}
</script>
