<template>
  <form
    @click="onClick"
    :style="{
      backgroundColor
    }"
    :class="{
      'c-search__cancel-visible': _visible,
      'c-search__round': round
    }"
    class="c-search"
    action=""
    onsubmit="return false;">
    <div class="c-search__cell">
      <i class="c-search__icon-search">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAr6XIYAAAAEHRSTlMA7xCA32Awz79AcJ+QIFCwFs9njwAAANNJREFUOMvtk90OgzAIRouC/e++93/aqclCLFq9WbKLnUs8BYHW/QjTIiJxutNiIOwEGWtQuF16CSuUk6TMWJkvvBmAj5/k/tIUAKU7l5ylcp8hAVStmIHchQoQ7PgIqCcxM9AG5LP2krNlohEX4NXHwlbFQOA+5AFnYZAJjcX70v5pM+FkgWU8Hh0u1ZOtVnvazqzoEo4p7aVAdZaGoznD/rZ+YTm8ClouTXCeJRXeNTVtmwrHyavZIwHQ5zoy3RSbyLKtU80h3zVf7pGZqbk/D3gDeQoM2LnjNc8AAAAASUVORK5CYII=" />
      </i>
      <div
        v-if="to"
        :style="{
          backgroundColor: inputBackgroundColor
        }"
        :placeholder="placeholder"
        class="c-search__input c-search__placeholder"
      >{{ _value ? _value : placeholder }}</div>
      <input
        v-else
        type="search"
        confirm-type="search"
        ref="search"
        class="c-search__input"
        :style="{
          backgroundColor: inputBackgroundColor
        }"
        :focus="_autofocus"
        :placeholder="placeholder"
        placeholder-class="c-search__placeholder"
        v-model="_value"
        @keyup="onKeyUp"
        @confirm="onConfirm"
      />
      <i
        v-if="!to"
        :style="{
          backgroundColor: inputBackgroundColor
        }"
        class="c-search__icon-cancel"
        @click="onCancel">
        <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogICAgICAgIDxwYXRoIGZpbGw9IiNiYmIiIGQ9Ik0xNC4xOCAxMy4wMDhsLTMuMDA4LTMuMDA4IDMuMDA4LTMuMDA4LTEuMTcyLTEuMTcyLTMuMDA4IDMuMDA4LTMuMDA4LTMuMDA4LTEuMTcyIDEuMTcyIDMuMDA4IDMuMDA4LTMuMDA4IDMuMDA4IDEuMTcyIDEuMTcyIDMuMDA4LTMuMDA4IDMuMDA4IDMuMDA4ek0xMCAxLjY4YzQuNjA5IDAgOC4zMiAzLjcxMSA4LjMyIDguMzJzLTMuNzExIDguMzItOC4zMiA4LjMyLTguMzItMy43MTEtOC4zMi04LjMyIDMuNzExLTguMzIgOC4zMi04LjMyeiI+PC9wYXRoPgogICAgICA8L3N2Zz4=" />
      </i>
    </div>
  </form>
</template>

<script>
import { isBrowser, to } from '../../utils'

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
    },
    focus: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    },
    inputBackgroundColor: {
      type: String,
      default: null
    },
    round: {
      type: Boolean,
      default: false
    },
    to: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    isBrowser && this._autofocus && this.$refs.search.focus()
  },
  methods: {
    onClick () {
      if (this.to) {
        to({
          vm: this,
          to: this.to
        })
      }
    },
    onKeyUp (keyCode) {
      if (keyCode.key === 'Enter') this.$emit('keyup-enter', this._value)
    },
    onConfirm (e) {
      if (typeof e.target.value === 'string' && e.target.value.trim() !== '') this.$emit('keyup-enter', e.target.value)
    },
    onCancel () {
      this._value = ''
      this.$emit('cancel')
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
        this.$emit('change', v)
      }
    },
    _visible () {
      if (typeof this.value === 'string' && this.value.trim() !== '') {
        return true
      } else {
        return false
      }
    },
    _autofocus () {
      return this.autofocus || this.focus
    }
  }
}
</script>
