<template>
  <div
    class="c-switch"
    :class="[
      type ? `c-switch__${type}` : ''
    ]">
    <label>
      <input type="checkbox" @change="handleChange" v-model="_value">
      <span class="c-switch__core"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'cSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange () {
      this.$emit('change', this._value)
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
