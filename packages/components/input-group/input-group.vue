<template>
  <div
    class="c-input-group"
    :class="[
      className
    ]">
    <h5
      v-if="title"
      class="c-input-group__title"
      :class="[
        type ? 'c-input-group__title-' + type : ''
      ]">
      {{ title }}
    </h5>
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
