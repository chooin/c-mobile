<template>
  <div
    class="c-input-upload-file"
    @click="handleClick"
    v-if="src">
    <img :src="src">
    <i @click.stop="handleDeleteClick"></i>
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
    handleClick () {
      this.$emit('click')
    },
    handleDeleteClick () {
      this.$emit('delete')
    }
  }
}
</script>
