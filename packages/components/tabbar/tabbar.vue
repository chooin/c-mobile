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
      this.div.style.width = '100%'
      let coverType = getObjectType(this.cover)
      if (coverType === 'Number') {
        this.div.style.height = `${this.cover}rem`
      } else if (coverType === 'String') {
        this.div.style.height = this.cover
      } else {
        this.div.style.height = '5rem'
      }
      this.div.className = 'c-tabbar__cover'
      document.body.appendChild(this.div)
    }
  },
  beforeDestroy () {
    this.div && this.div.remove()
  }
}
</script>
