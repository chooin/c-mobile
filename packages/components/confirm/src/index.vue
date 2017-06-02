<template>
  <div class="c-confirm">
    <div class="content">
      {{ text }}
      <c-flex>
        <c-flex-item @click="okClick">OK</c-flex-item>
        <c-flex-item @click="cancelClick" v-if="cancel">Cancel</c-flex-item>
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
      type: Function,
      default: null
    },
    ok: {
      type: Function,
      default () {}
    }
  },
  methods: {
    okClick () {
      this.ok()
    },
    cancelClick () {
      this.cancel()
    }
  },
  components: {
    cFlex: Flex,
    cFlexItem: FlexItem
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
