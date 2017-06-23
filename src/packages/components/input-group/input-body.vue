<template>
  <div class="c-input-body" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cInputBody',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
