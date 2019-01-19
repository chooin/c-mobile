<template>
  <div
    class="c-input-group"
    :class="[
      className
    ]">
    <c-text
      v-if="title"
      class="c-input-group__title"
      :type="type"
      block>
      {{ title }}
    </c-text>
    <div
      class="c-input-group__content"
      :class="{
        'c-input-group__noborder-top': noborderTop || noborder,
        'c-input-group__noborder-bottom': noborderBottom || noborder
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
    },
    labelWidth: {
      type: String,
      default: '110px'
    },
    className: {
      type: String,
      default: null
    }
  }
}
</script>
