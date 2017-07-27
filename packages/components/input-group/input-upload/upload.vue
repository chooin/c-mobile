<template>
  <div class="c-input-upload">
    <div class="c-input-upload__title" v-show="title">{{ title }}</div>
    <div class="c-input-upload__amount" v-show="amount">{{ amount }}</div>
    <div class="c-input-upload__files">
      <slot></slot>
      <div class="c-input-upload__btn" v-show="allowUpload" @click="handleClick">
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
    },
    amount: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick () {
      this.$emit('choose-image')
    }
  }
}
</script>

<style lang="scss">
  // @import './style';
</style>
