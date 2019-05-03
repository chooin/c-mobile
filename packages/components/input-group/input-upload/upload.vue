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
      <span style="color: #f00" v-if="required">*</span>{{ title }}
      <slot name="title"></slot>
    </div>
    <div
      v-show="amount !== null"
      class="c-input-upload__amount">
      {{ amount }}/{{ maxAmount }}
    </div>
    <div class="c-input-upload__files">
      <slot></slot>
      <template v-if="$slots['upload-button']">
        <div class="c-input-upload__button">
          <slot name="upload-button"></slot>
        </div>
      </template>
      <div
        v-else
        v-show="_allowUpload"
        class="c-input-upload__button"
        @click="onClick">
        <input
          v-show="inputUpload"
          @change="onFileChange"
          :accept="accept"
          type="file">
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
      default: null
    },
    inputUpload: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: null
    },
    maxAmount: {
      type: Number,
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
      this.$emit('upload')
    },
    onFileChange (file) {
      this.$emit('change', file)
    }
  },
  computed: {
    _allowUpload () {
      if (typeof this.allowUpload === 'boolean') return this.allowUpload
      if (
        this.amount !== null &&
        this.maxAmount > this.amount) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
