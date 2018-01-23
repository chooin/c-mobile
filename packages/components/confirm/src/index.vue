<template>
  <div class="c-confirm">
    <div class="c-confirm__cell">
      {{ text }}
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
