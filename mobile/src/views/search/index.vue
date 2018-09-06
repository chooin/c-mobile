<template>
  <div class="v-search">
    <c-search v-model="search" @keyup-enter="keyupEnter" autofocus @change="onChange" />
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
    onChange (v) {
      this.$Toast(v)
    },
    keyupEnter (v) {
      this.$Toast([
        'enter',
        v
      ])
    }
  }
}
</script>
