<template>
  <label class="c-input"
    :class="[{
      'c-input-addon': addon,
      'c-input-next': next,
      'c-input-icon': icon,
      'c-input-checked': checked,
      'c-input-switch': _switch,
      'noborder-top': noborderTop
    }]"
    @click="handleClick">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    addon: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    switch: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object,
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _switch: { // 比较尴尬 switch 和 javascript swicth 冲突
      get () {
        return this.switch
      }
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

<style lang="scss">
  @import './input';
</style>
