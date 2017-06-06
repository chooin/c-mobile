<template>
  <a
    class="c-tabbar-item"
    :class="{
      current
    }"
    @click="handleClick">
    <slot>
      <c-icon v-show="icon" :name="icon" />
      <c-text v-show="text">{{ text }}</c-text>
    </slot>
  </a>
</template>

<script>
export default {
  name: 'cTabbarItem',
  props: {
    to: {
      type: Object,
      default: null
    },
    current: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick () {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scope lang="scss">
  @import './style';
</style>
