<template>
  <div
    class="c-input-upload"
    :class="[
      {
        'noborder-top': noborderTop,
        'c-input-upload__allow-delete': allowDelete
      }
    ]">
    <div
      v-show="$slots.title || title"
      class="c-input-upload__title">
      <span style="color: #f00" v-if="required">*</span>{{ title }}<slot name="title"></slot>
    </div>
    <div
      v-show="amount"
      class="c-input-upload__amount">
      {{ amount }}
    </div>
    <div class="c-input-upload__files">
      <slot></slot>
      <template v-if="$slots['upload-btn']">
        <div class="c-input-upload__btn">
          <slot name="upload-btn"></slot>
        </div>
      </template>
      <div
        v-else
        v-show="allowUpload"
        class="c-input-upload__btn"
        @click="onClick">
        <input
          v-show="showUploadInput"
          type="file"
          @change="onFileChange"
          :accept="accept">
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
      default: false
    },
    showUploadInput: {
      type: Boolean,
      default: false
    },
    amount: {
      type: String,
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
    },
    allowDelete: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('choose-image')
    },
    onFileChange (file) {
      this.$emit('change', file)
    }
  }
}
</script>
