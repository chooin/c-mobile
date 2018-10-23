<template>
  <div
    class="c-toast"
    v-show="visible"
    @click="onClick">
    <div class="c-toast__content">
      <p v-for="(item, index) in text" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cToast',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    text: {
      type: Array,
      default: () => []
    },
    cb: {
      type: Function,
      default () {}
    }
  },
  methods: {
    onClick () {
      this.cb()
    }
  }
}
</script>
