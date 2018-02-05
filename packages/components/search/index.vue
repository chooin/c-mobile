<template>
  <form class="c-search" action="" onsubmit="return false;">
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :placeholder="placeholder"
      v-model="_value"
      @keyup="inputKeyupEnter">
    <i class="c-search__cancel-button" v-if="_value" @click="deleteClick">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="#bbb" d="M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"></path>
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
    inputKeyupEnter (keyCode) {
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
