<template>
  <form
    v-if="isBrowser"
    :style="{
      backgroundColor
    }"
    :class="{
      'c-search__cancel-visible': _visible
    }"
    class="c-search"
    action=""
    onsubmit="return false;">
    <i class="c-search__icon-search">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KICAgICAgICA8ZyBpZD0ic3VyZmFjZTEiPgogICAgICAgICAgPHBhdGggZmlsbD0iI2JiYiIgZD0iTSAyMSAzIEMgMTEuNjIxMDk0IDMgNCAxMC42MjEwOTQgNCAyMCBDIDQgMjkuMzc4OTA2IDExLjYyMTA5NCAzNyAyMSAzNyBDIDI0LjcxMDkzOCAzNyAyOC4xNDA2MjUgMzUuODA0Njg4IDMwLjkzNzUgMzMuNzgxMjUgTCA0NC4wOTM3NSA0Ni45MDYyNSBMIDQ2LjkwNjI1IDQ0LjA5Mzc1IEwgMzMuOTA2MjUgMzEuMDYyNSBDIDM2LjQ2MDkzOCAyOC4wODU5MzggMzggMjQuMjIyNjU2IDM4IDIwIEMgMzggMTAuNjIxMDk0IDMwLjM3ODkwNiAzIDIxIDMgWiBNIDIxIDUgQyAyOS4yOTY4NzUgNSAzNiAxMS43MDMxMjUgMzYgMjAgQyAzNiAyOC4yOTY4NzUgMjkuMjk2ODc1IDM1IDIxIDM1IEMgMTIuNzAzMTI1IDM1IDYgMjguMjk2ODc1IDYgMjAgQyA2IDExLjcwMzEyNSAxMi43MDMxMjUgNSAyMSA1IFogIi8+CiAgICAgICAgPC9nPgogICAgICA8L3N2Zz4=" />
    </i>
    <input
      type="search"
      ref="search"
      class="c-search__input"
      :style="{
        backgroundColor: inputBackgroundColor
      }"
      :placeholder="placeholder"
      v-model="_value"
      @keyup="onKeyUp"
    />
    <i
      :style="{
        backgroundColor: inputBackgroundColor
      }"
      class="c-search__cancel-button"
      @click="onCancel">
      <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogICAgICAgIDxwYXRoIGZpbGw9IiNiYmIiIGQ9Ik0xNC4xOCAxMy4wMDhsLTMuMDA4LTMuMDA4IDMuMDA4LTMuMDA4LTEuMTcyLTEuMTcyLTMuMDA4IDMuMDA4LTMuMDA4LTMuMDA4LTEuMTcyIDEuMTcyIDMuMDA4IDMuMDA4LTMuMDA4IDMuMDA4IDEuMTcyIDEuMTcyIDMuMDA4LTMuMDA4IDMuMDA4IDMuMDA4ek0xMCAxLjY4YzQuNjA5IDAgOC4zMiAzLjcxMSA4LjMyIDguMzJzLTMuNzExIDguMzItOC4zMiA4LjMyLTguMzItMy43MTEtOC4zMi04LjMyIDMuNzExLTguMzIgOC4zMi04LjMyeiI+PC9wYXRoPgogICAgICA8L3N2Zz4=" />
    </i>
  </form>
  <div
    v-else
    :style="{
      backgroundColor
    }"
    :class="{
      'c-search__cancel-visible': _visible
    }"
    class="c-search">
    <i class="c-search__icon-search">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KICAgICAgICA8ZyBpZD0ic3VyZmFjZTEiPgogICAgICAgICAgPHBhdGggZmlsbD0iI2JiYiIgZD0iTSAyMSAzIEMgMTEuNjIxMDk0IDMgNCAxMC42MjEwOTQgNCAyMCBDIDQgMjkuMzc4OTA2IDExLjYyMTA5NCAzNyAyMSAzNyBDIDI0LjcxMDkzOCAzNyAyOC4xNDA2MjUgMzUuODA0Njg4IDMwLjkzNzUgMzMuNzgxMjUgTCA0NC4wOTM3NSA0Ni45MDYyNSBMIDQ2LjkwNjI1IDQ0LjA5Mzc1IEwgMzMuOTA2MjUgMzEuMDYyNSBDIDM2LjQ2MDkzOCAyOC4wODU5MzggMzggMjQuMjIyNjU2IDM4IDIwIEMgMzggMTAuNjIxMDk0IDMwLjM3ODkwNiAzIDIxIDMgWiBNIDIxIDUgQyAyOS4yOTY4NzUgNSAzNiAxMS43MDMxMjUgMzYgMjAgQyAzNiAyOC4yOTY4NzUgMjkuMjk2ODc1IDM1IDIxIDM1IEMgMTIuNzAzMTI1IDM1IDYgMjguMjk2ODc1IDYgMjAgQyA2IDExLjcwMzEyNSAxMi43MDMxMjUgNSAyMSA1IFogIi8+CiAgICAgICAgPC9nPgogICAgICA8L3N2Zz4=" />
    </i>
    <input
      type="text"
      ref="search"
      class="c-search__input"
      :style="{
        backgroundColor: inputBackgroundColor
      }"
      :placeholder="placeholder"
      v-model="_value"
      :focus="_autofocus"
      @confirm="onConfirm"
    />
    <i
      :style="{
        backgroundColor: inputBackgroundColor
      }"
      class="c-search__cancel-button"
      @click="onCancel">
      <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogICAgICAgIDxwYXRoIGZpbGw9IiNiYmIiIGQ9Ik0xNC4xOCAxMy4wMDhsLTMuMDA4LTMuMDA4IDMuMDA4LTMuMDA4LTEuMTcyLTEuMTcyLTMuMDA4IDMuMDA4LTMuMDA4LTMuMDA4LTEuMTcyIDEuMTcyIDMuMDA4IDMuMDA4LTMuMDA4IDMuMDA4IDEuMTcyIDEuMTcyIDMuMDA4LTMuMDA4IDMuMDA4IDMuMDA4ek0xMCAxLjY4YzQuNjA5IDAgOC4zMiAzLjcxMSA4LjMyIDguMzJzLTMuNzExIDguMzItOC4zMiA4LjMyLTguMzItMy43MTEtOC4zMi04LjMyIDMuNzExLTguMzIgOC4zMi04LjMyeiI+PC9wYXRoPgogICAgICA8L3N2Zz4=" />
    </i>
  </div>
</template>

<script>
import { isBrowser } from '../../utils'

export default {
  name: 'cSearch',
  data () {
    return {
      isBrowser
    }
  },
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
  },
  mounted () {
    this.isBrowser && this._autofocus && this.$refs.search.focus()
  },
  methods: {
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
