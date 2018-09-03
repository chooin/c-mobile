<template>
  <div
    class="c-input-upload-file"
    @click="onClick"
    v-if="src">
    <img :src="src">
    <i @click.stop="onDeleteClick"></i>
  </div>
</template>

<script>
export default {
  name: 'cInputUploadFile',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
    onDeleteClick () {
      this.$emit('delete')
    }
  }
}
</script>
