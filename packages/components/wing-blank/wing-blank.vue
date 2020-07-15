<template>
  <div
    :class="[
    'c-wing-blank',
      {
        'c-wing-blank__xs': size === 'xs',
        'c-wing-blank__sm': size === 'sm',
        'c-wing-blank__md': size === 'md',
        'c-wing-blank__lg': size === 'lg',
        'c-wing-blank__xl': size === 'xl',
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-wing-blank',
  props: {
    size: {
      type: String,
      default: 'md' // ? 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }
  }
}
</script>
