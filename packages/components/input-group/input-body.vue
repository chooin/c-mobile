<template>
  <div class="c-input-body" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cInputBody',
  props: {
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    onClick () {
      to({
        vm: this,
        to: this.to
      })
    }
  }
}
</script>
