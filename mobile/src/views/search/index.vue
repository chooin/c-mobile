<template>
  <div class="v-search">
    <c-search v-model="search" @keyup-enter="keyupEnter" autofocus @input="change" />
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
      this.$Toast(v)
    },
    keyupEnter (v) {
      this.$Toast(v)
    }
  }
}
</script>
