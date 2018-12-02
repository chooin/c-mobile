<template>
  <div
    class="c-load-more"
    :class="[
      loading ? 'c-load-more__loading' : 'c-load-more__end'
    ]"
  >
    <span
      v-if="!loading"
      :style="{
        backgroundColor: backgroundColor
      }"
    >{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'cLoadMore',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '到底了'
    },
    backgroundColor: {
      type: String,
      default: '#f0f0f0'
    }
  }
}
</script>
