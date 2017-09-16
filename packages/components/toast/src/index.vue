<template>
  <transition name="fade">
    <div
      class="c-toast"
      v-show="visible"
      @click="handleClick">
      <div class="c-toast__content">
        <p v-for="(item, index) in texts" :key="index">{{ item }}</p>
      </div>
    </div>
  </transition>
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
