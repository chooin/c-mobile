<template>
  <div
    class="c-sidebar"
    :class="[
      {
        'c-sidebar__visible': visible
      }
    ]">
    <slot name="header"></slot>
    <div class="c-sidebar__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cSidebar',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
