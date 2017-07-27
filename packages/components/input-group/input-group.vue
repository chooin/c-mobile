<template>
  <div
    class="c-input-group">
    <c-text
      class="c-input-group__title"
      :type="type"
      v-if="title">
      {{ title }}
    </c-text>
    <div
      class="c-input-group__content"
      :class="{
        'noborder': noborder,
        'noborder-top': noborderTop,
        'noborder-bottom': noborderBottom
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cInputGroup',
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    noborder: {
      type: Boolean,
      default: false
    },
    noborderTop: {
      type: Boolean,
      default: false
    },
    noborderBottom: {
      type: Boolean,
      default: false
    }
  }
}
</script>
