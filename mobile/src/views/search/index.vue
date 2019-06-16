<template>
  <div class="v-search">
    <c-search v-model="search" @keyup-enter="keyupEnter" autofocus @change="onChange" />
    <div style="margin-top: 15px"></div>
    <c-search v-model="search" @keyup-enter="keyupEnter"
      background-color="#fff"
      input-background-color="#f0f1f2" autofocus @change="onChange" round />
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
