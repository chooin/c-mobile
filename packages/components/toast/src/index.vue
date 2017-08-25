<template>
  <div
    class="c-toast"
    v-show="visible"
    @click="handleClick">
    <div class="c-toast__content">
      <p v-for="(text, index) in texts" :key="index">{{ text }}</p>
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
    texts: {
      type: Array,
      default: () => []
    },
    cb: {
      type: Function,
      default () {}
    }
  },
  methods: {
    handleClick () {
      this.cb()
    }
  }
}
</script>
