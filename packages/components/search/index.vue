<template>
  <form class="c-search" action="" onsubmit="return false;">
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :placeholder="placeholder"
      v-model="_value"
      @change="handleChange">
    <i class="c-search__cancel-button" v-if="_value" @click="clearClick"></i>
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
    handleChange () {
      this.$emit('change', this._value)
    },
    clearClick () {
      this._value = ''
      this.$emit('change', '')
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
