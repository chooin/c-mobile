<template>
  <div
    class="c-actionsheet"
    :class="{
      'c-actionsheet__visible': value,
      'c-actionsheet__title': title || description,
      'c-actionsheet__options-empty': Array.isArray(_options) && _options.length === 0
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
      <div class="c-actionsheet__options">
        <button
          v-for="(item, index) in _options"
          :key="index"
          @click.stop="onOption(item)"
          :session-from="item.sessionFrom"
          :send-message-title="item.itemMessageTitle"
          :send-message-path="item.itemMessagePath"
          :send-message-img="item.itemMessageImg"
          :show-message-card="item.itemMessageCard"
          :style="{
            color: item.color,
            fontWeight: item.bold || 'normal'
          }"
          :open-type="item.openType">{{ item.text }}</button>
      </div>
      <div
        @click.stop="onCancel"
        :style="cancelStyle"
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
    cancelStyle: {
      type: Object,
      default: () => {}
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
