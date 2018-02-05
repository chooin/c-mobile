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
      console.log('change：', v)
    },
    keyupEnter (v) {
      console.log('enter：', v)
    }
  }
}
</script>
