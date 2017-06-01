<template>
  <div class="c-input-upload">
    <div class="c-input-upload-title" v-show="title">{{ title }}</div>
    <div class="c-input-upload-files">
      <slot></slot>
      <div class="c-input-upload-btn" v-show="allowUpload">
        <input type="file" v-show="showUploadInput">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cInputUpload',
  props: {
    title: {
      type: String,
      default: null
    },
    allowUpload: {
      type: Boolean,
      default: true
    },
    showUploadInput: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
  @import './style';
</style>
