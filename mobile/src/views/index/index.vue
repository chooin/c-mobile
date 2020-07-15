<template>
  <c-container
    padding="15px 0"
    safe-area>
    <c-input-group>
      <c-input
        v-for="(item, index) in components"
        :key="index"
        :to="`/${item}`"
        next
        addon>
        <c-input-body>{{ item }}</c-input-body>
      </c-input>
    </c-input-group>
  </c-container>
</template>

<script>
export default {
  data () {
    return {
      components: [
        'button',
        'flex',
        'header',
        'switch',
        'input-group',
        'icon',
        'tab',
        'tabbar',
        'toast',
        'confirm',
        'actionsheet',
        'sidebar',
        'text',
        'loading',
        'search',
        'keyboard',
        'radio',
        'container',
        'load-more',
        'white-space',
        'wing-blank',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style.scss';
</style>
