<template>
  <transition name="c-keyboard-transition">
  <div
    v-if="_value"
    class="c-keyboard"
    @touchstart.stop="() => {}"
    :class="{
      'c-keyboard__is-iphonex': isIPhoneX
    }">
    <div class="c-keyboard__done">
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
import { isIPhoneX } from '../../utils'
export default {
  name: 'cKeyboard',
  data () {
    return {
      isIPhoneX
    }
  },
  mounted () {
    document.addEventListener('touchstart', e => {
      if (this.allowHide) this._value = false
    }, true)
    document.addEventListener('click', e => {
      if (this.allowHide) this._value = false
    }, true)
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
      default: 'Done'
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
      if (this.allowHide) this._value = false
      this.$emit('done')
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
  }
}
</script>
