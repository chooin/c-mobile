<template>
  <div
    class="c-tabbar-item"
    :class="{
      'c-tabbar__active': _active
    }"
    @click="onClick">
    <slot>
      <i>
        <img :src="_active ? activeSrc : src" />
      </i>
      <p v-show="text">{{ text }}</p>
    </slot>
    <b v-show="badge">{{ badge }}</b>
  </div>
</template>

<script>
import to from '../../utils/to'
import { isMiniProgramIsIPhoneX } from '../../utils/device'

export default {
  name: 'cTabbarItem',
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    current: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    badge: {
      type: Number,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    activeSrc: {
      type: String,
      default: null
    }
  },
  methods: {
    onClick () {
      if (this._active) return
      if (
        isMiniProgramIsIPhoneX &&
        this.to
      ) {
        /* eslint-disable */
        let Megalo = Megalo || wx || false
        if (Megalo) {
          Megalo.redirectTo({
            url: this.to
          })
        }
        /* eslint-disable */
      } else {
        to({
          vm: this,
          to: this.to
        })
      }
    }
  },
  computed: {
    _active () {
      return this.active || this.current
    }
  }
}
</script>
