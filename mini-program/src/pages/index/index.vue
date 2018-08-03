<template>
  <div class="p-index">
    <c-btn :to="{
      path: '/312312',
      query: {
        aa: 1
      }
    }">Hello</c-btn>
  </div>
</template>

<script>
import cBtn from '@/packages/components/btn/index'

export default {
  components: {
    cBtn
  },
  methods: {
  }
}
</script>

<style>

</style>

