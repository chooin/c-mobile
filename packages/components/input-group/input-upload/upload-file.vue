<template>
  <div
    v-if="src"
    @click="onClick"
    class="c-input-upload-file">
    <img :src="src">
    <i @click.stop="onDelete"></i>
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
    onDelete () {
      this.$emit('delete')
    }
  }
}
</script>
