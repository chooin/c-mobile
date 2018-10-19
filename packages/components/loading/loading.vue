<template>
  <div class="c-loading">
    <div class="c-loading__cell">
      <i class="c-loading__loading"></i>
      <span v-if="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cLoading',
  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>
