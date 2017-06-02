<template>
  <div class="v-toast">
    <c-btn type="primary" @click="toastClick">toast</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    toastClick () {
      this.$Toast({
        texts: 'toast',
        duration: 3000,
        cb: () => {
          window.alert('hello toast')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
