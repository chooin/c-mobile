<template>
  <div
    class="c-confirm"
    :class="{
      'c-confirm__title': title
    }">
    <div class="c-confirm__cell">
      <div class="c-confirm__title" v-if="title">
        {{ title }}
      </div>
      <div class="c-confirm__content">
        <template v-if="Array.isArray(text)">
          <template v-if="text.length === 1">
            {{ text[0] }}
          </template>
          <template v-else>
            <p v-for="(item, index) in text" :key="index">{{ item }}</p>
          </template>
        </template>
        <template v-else>
          {{ text }}
        </template>
      </div>
      <div class="c-confirm__btn-group">
        <div
          class="c-confirm__btn"
          @click="item.click"
          v-for="(item, index) in button"
          :key="index"
          :style="{
            color: item.color
          }">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cConfirm',
  props: {
    title: {
      type: String,
      default: null
    },
    text: {
      type: [String, Array],
      default: null
    },
    button: {
      type: Array,
      default: null
    }
  }
}
</script>
