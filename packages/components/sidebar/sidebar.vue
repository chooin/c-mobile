<template>
  <div
    class="c-sidebar"
    :class="[
      {
        'c-sidebar__visible': visible,
        'c-sidebar__head': $slots.head
      }
    ]">
    <slot name="head"></slot>
    <div class="c-sidebar__body">
      <slot></slot>
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
