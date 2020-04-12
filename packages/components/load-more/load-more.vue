<template>
  <div
    class="c-load-more"
    :class="[
      loading ? 'c-load-more__loading' : 'c-load-more__end',
      {
        'c-load-more_safe-area': safeArea
      }
    ]"
  >
    <div class="c-load-more__content">
      <span
        v-if="!loading"
        :style="{
          backgroundColor,
          color
        }"
      >{{ text }}</span>
    </div>
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
      default: '#f2f2f2'
    },
    color: {
      type: String,
      default: null
    },
    safeArea: {
      type: Boolean,
      default: false
    }
  }
}
</script>
