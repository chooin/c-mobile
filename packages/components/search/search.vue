<template>
  <form class="c-search" action="" onsubmit="return false;">
    <i class="c-search__icon-search">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="20" height="20">
        <g id="surface1">
          <path fill="#bbb" d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z "/>
        </g>
      </svg>
    </i>
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :placeholder="placeholder"
      v-model="_value"
      @keyup="inputKeyup">
    <i class="c-search__cancel-button" v-if="_value" @click="onDelete">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill="#bbb" d="M14.18 13.008l-3.008-3.008 3.008-3.008-1.172-1.172-3.008 3.008-3.008-3.008-1.172 1.172 3.008 3.008-3.008 3.008 1.172 1.172 3.008-3.008 3.008 3.008zM10 1.68c4.609 0 8.32 3.711 8.32 8.32s-3.711 8.32-8.32 8.32-8.32-3.711-8.32-8.32 3.711-8.32 8.32-8.32z"></path>
      </svg>
    </i>
  </form>
</template>

<script>
export default {
  name: 'cSearch',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.autofocus && this.$refs.search.focus()
  },
  methods: {
    inputKeyup (keyCode) {
      if (keyCode.key === 'Enter') this.$emit('keyup-enter', this._value)
    },
    onDelete () {
      this._value = ''
      this.$emit('delete')
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
        this.$emit('input', value)
      }
    }
  }
}
</script>
