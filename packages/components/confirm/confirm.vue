<template>
  <div
    class="c-confirm"
    :class="{
      'c-confirm__has-title': title
    }">
    <div class="c-confirm__cell">
      <div class="c-confirm__title" v-if="title">
        {{ title }}
      </div>
      <div class="c-confirm__content">
        {{ text }}
      </div>
      <div class="c-confirm__btn-group">
        <div
          class="c-confirm__btn"
          @click="ok.click"
          :style="{
            color: ok.color
          }">
          {{ ok.text }}
        </div>
        <div
          class="c-confirm__btn"
          @click="cancel.click"
          :style="{
            color: cancel.color
          }"
          v-if="cancel.text">
          {{ cancel.text }}
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
      type: String,
      default: null
    },
    cancel: {
      type: Object,
      default: null
    },
    ok: {
      type: Object,
      default: null
    }
  }
}
</script>
