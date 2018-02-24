<template>
  <div
    class="c-keyboard"
    :class="{
      'c-keyboard__is-iphonex': isIPhoneX
    }">
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
      <c-keyboard-key class="c-keyboard__key-gray c-keyboard__key-delete" type="delete" @click="handleDelete" />
    </div>
  </div>
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
  props: {
    type: {
      type: String,
      default: 'digit' // number，idcard，digit
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('click', value)
    },
    handleDelete () {
      this.$emit('delete')
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
    }
  },
  components: {
    cKeyboardKey
  }
}
</script>
