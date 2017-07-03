<template>
  <div class="c-input-head" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cInputHead',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
