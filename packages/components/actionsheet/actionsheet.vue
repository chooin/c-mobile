<template>
  <div
    class="c-actionsheet"
    :class="{
      'c-actionsheet__visible': value,
      'c-actionsheet__title': title || description,
      'c-actionsheet__actions-empty': Array.isArray(_options) && _options.length === 0
    }"
    @click="onCancel"
    catchtouchmove>
    <div
      class="c-actionsheet__content">
      <div
        class="c-actionsheet__header"
        @click.stop="() => {}">
        <h5 class="c-actionsheet__title" v-if="title">
          {{ title }}
        </h5>
        <p class="c-actionsheet__description" v-if="description">
          {{ description }}
        </p>
      </div>
      <div class="c-actionsheet__actions">
        <ul>
          <template v-for="(item, index) in _options">
            <button
              v-if="item.openType"
              :key="index"
              @click.stop="onOption(item)"
              :style="{
                color: item.color
              }"
              :open-type="item.openType">{{ item.text }}</button>
            <li
              v-else
              :key="index"
              @click.stop="onOption(item)"
              :style="{
                color: item.color
              }">{{ item.text }}</li>
          </template>
        </ul>
      </div>
      <div
        @click.stop="onCancel"
        :style="{
          color: cancelColor
        }"
        class="c-actionsheet__cancel">
        {{ cancelText }}
      </div>
    </div>
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
    title: {
      type: String
    },
    description: {
      type: String
    },
    actions: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    cancelColor: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onOption (item) {
      if (item.click) item.click()
      this._value = false
    },
    onCancel () {
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
    },
    _options () {
      if (Array.isArray(this.options) && this.options.length > 0) {
        return this.options
      } else if (Array.isArray(this.actions) && this.actions.length > 0) {
        return this.actions
      } else {
        return []
      }
    }
  }
}
</script>
