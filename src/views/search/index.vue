<template>
  <div class="v-search">
    <c-search v-model="search" @change="change" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    change (v) {
      console.log(v, '12')
    }
  }
}
</script>
