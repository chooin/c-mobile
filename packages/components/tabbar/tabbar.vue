<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar__${type}` : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
import { getObjectType } from '../../utils'

export default {
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    }
  },
  data () {
    return {
      div: null
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      document.querySelectorAll('.c-tabbar__cover').length === 0
    ) {
      this.div = document.createElement('div')
      this.div.className = 'c-tabbar__cover'
      if (getObjectType(this.cover) === 'Number') {
        this.div.style.height = `${this.cover}px`
      } else if (getObjectType(this.cover) === 'String') {
        this.div.style.height = this.cover
      }
      document.body.appendChild(this.div)
    }
  },
  beforeDestroy () {
    this.div && this.div.remove()
  }
}
</script>
