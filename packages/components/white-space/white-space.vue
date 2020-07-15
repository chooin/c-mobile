<template>
  <div
    :class="[
    'c-white-space',
      {
        'c-white-space__xs': size === 'xs',
        'c-white-space__sm': size === 'sm',
        'c-white-space__md': size === 'md',
        'c-white-space__lg': size === 'lg',
        'c-white-space__xl': size === 'xl',
      }
    ]"></div>
</template>

<script>
export default {
  name: 'c-white-space',
  props: {
    size: {
      type: String,
      default: 'md' // ? 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }
  }
}
</script>
