<template>
  <div
    class="c-actionsheet"
    :class="{
      'c-actionsheet-visible': value
    }"
    @click="cancelClick">
    <div class="content">
      <div class="actions">
        <ul>
          <li
            v-for="item in actions"
            @click.stop="actionClick(item)"
            :style="{
              color: item.color
            }">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="cancel" @click.stop="cancelClick">{{ cancelText }}</div>
    </div>
    <input type="hidden" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'cActionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    actionClick (item) {
      item.click()
      this._value = false
    },
    cancelClick () {
      this._value = false
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

<style scoped lang="scss">
  // @import './style';
</style>
