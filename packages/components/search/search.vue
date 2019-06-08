<template>
  <form
    :style="{
      backgroundColor
    }"
    :class="{
      'c-search__cancel-visible': _visible
    }"
    class="c-search"
    action=""
    onsubmit="return false;">
    <div class="c-search__cell">
      <i class="c-search__icon-search">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAUVBMVEVHcEyXl5eYmJiampqYmJiXl5eZmZmfn5+Xl5eZmZmYmJiZmZmYmJiYmJiZmZmYmJiYmJiXl5eZmZmYmJiYmJiZmZmYmJiZmZmYmJiYmJiZmZnQfvzOAAAAGnRSTlMAQO8wzyDwEGCAwKDgsI9wn2+vf9BQkD/fv0Hu6jsAAAGYSURBVHhe7ZXbcsMgDEQxmItw8DWJE/7/QzuDxtO0Waw07lOn+xh0srBCWP0t+XX173BmuutcpO+T+ZFjf8tfdOv9q+ii85P08hI+FRTgk2w7PgAuRveAj15g2w1MwfKCHdJGt7u01Uw6+lLmyTGtrezbPTn4TvSe2TagtcDmc42lwp4MXjWnQhNmLfsyi2j2xsfmYzWqqgsHUjcmtSOqWqdy4N1O+hJaAgvFOKhdhVLk8e8nJagkfsFxXSX4iiMrs2QkuCnzBbN2SpTjvMFfRhmO4C4cg0m8IbjuOBxwD3BHh18PrJXhFsEKDAyQxZf7jOcCRXPGMSYJTngCDNo33vUFTZvcrLk2twSeMNAS7jK2br30TXC+/sbMwqY3Y9it3NfYvrBx/1Uf/c6319n9Vz23oMC2vHarZzJk1vKtxPOWhUQps3RvPlHTawYlOri88eMyreu0jEwCGn9Jsc4miLQnB0h+ewSa8SfSdVYpQEM8pEf7OHAxorGaga4xdkQ8KwIt6jj9T6sjdDhCkzpAW/WmmpQadVAfoDRGmZ0wK20AAAAASUVORK5CYII=" />
      </i>
      <input
        type="search"
        confirm-type="search"
        ref="search"
        class="c-search__input"
        :style="{
          backgroundColor: inputBackgroundColor
        }"
        :focus="_autofocus"
        :placeholder="placeholder"
        v-model="_value"
        @keyup="onKeyUp"
        @confirm="onConfirm"
      />
      <i
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
import { isBrowser } from '../../utils'

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
  },
  mounted () {
    isBrowser && this._autofocus && this.$refs.search.focus()
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
