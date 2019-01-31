<template>
  <c-container
    padding="15px 0"
    safe-area>
    <c-input-group>
      <c-input
        v-for="(item, index) in components"
        :key="index"
        :to="`/pages/${item}`"
        next>
        <c-input-body>
          <c-text>{{ item }}</c-text>
        </c-input-body>
      </c-input>
    </c-input-group>
  </c-container>
</template>

<script>
import cInputGroup from '../../../packages/components/input-group/input-group.vue'
import cInput from '../../../packages/components/input-group/input.vue'
import cInputHead from '../../../packages/components/input-group/input-head.vue'
import cInputBody from '../../../packages/components/input-group/input-body.vue'
import cText from '../../../packages/components/text/text.vue'

export default {
  data () {
    return {
      components: [
        'button',
        'flex',
        // 'header',
        // 'switch',
        'input-group',
        // 'icon',
        // 'tab',
        // 'tabbar',
        // 'toast',
        // 'confirm',
        // 'actionsheet',
        // 'sidebar',
        // 'text',
        // 'loading',
        // 'search',
        // 'keyboard',
        // 'radio',
        // 'container',
        // 'load-more',
        'picker'
      ]
    }
  },
  components: {
    cInputGroup,
    cInput,
    cInputHead,
    cInputBody,
    cText
  }
}
</script>

<style scoped>
</style>
