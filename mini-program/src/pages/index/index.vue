<template>
  <div class="p-index">
    <c-button :to="{
      path: '/312312',
      query: {
        aa: 1
      }
    }">Hello</c-button>
  </div>
</template>

<script>
import cButton from '@/packages/components/button/index'

export default {
  components: {
    cButton
  },
  methods: {
  }
}
</script>

<style>

</style>

