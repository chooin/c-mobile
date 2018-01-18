<template>
  <div class="c-confirm">
    <div class="c-confirm__content">
      {{ text }}
      <c-flex>
        <c-flex-item
          @click="ok.click"
          :style="{
            color: ok.color
          }">
          {{ ok.text }}
        </c-flex-item>
        <c-flex-item
          @click="cancel.click"
          :style="{
            color: cancel.color
          }"
          v-if="cancel.text">
          {{ cancel.text }}
        </c-flex-item>
      </c-flex>
    </div>
  </div>
</template>

<script>
import { Flex, FlexItem } from '../../flex'
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
  },
  components: {
    cFlex: Flex,
    cFlexItem: FlexItem
  }
}
</script>
