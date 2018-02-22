<template>
  <form class="c-search" action="" onsubmit="return false;">
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :placeholder="placeholder"
      v-model="_value"
      @keyup="inputKeyup">
    <i class="c-search__cancel-button" v-if="_value" @click="deleteClick">
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
      default: 'Search'
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
    deleteClick () {
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
        this.$emit('input', value)
      }
    }
  }
}
</script>
