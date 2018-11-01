<template>
  <div class="v-sidebar">
    <div style="padding: 1.5rem 1.5rem 0;">
      <c-button type="primary" @click="showSidebarClick">显示</c-button>
    </div>
    <c-sidebar :visible="visible">
      <template slot="head">
        <c-header :left="{
          back: true,
          click: () => {
            visible = false
          }
        }" />
      </template>
      <c-input-group noborder-top>
        <c-input>
          <c-input-body>
            sidebar
          </c-input-body>
        </c-input>
      </c-input-group>
    </c-sidebar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showSidebarClick () {
      this.visible = true
    }
  }
}
</script>
