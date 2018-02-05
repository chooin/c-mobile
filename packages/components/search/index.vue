<template>
  <form class="c-search" action="" onsubmit="return false;">
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :placeholder="placeholder"
      v-model="_value"
      @keyup="inputKeyupEnter">
    <i class="c-search__cancel-button" v-if="_value" @click="deleteClick"></i>
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
