<template>
  <div class="sidebar mt-15">
    <c-btn type="primary" @click="showSidebarClick">显示</c-btn>
    <c-sidebar :visible="visible">
      <template slot="header">
        <c-header :left="{
          back: true,
          click: () => {
            visible = false
          }
        }" />
      </template>
      <template slot="body">
        <c-input-group noborder-top>
          <c-input>
            <c-input-body>
              sidebar
            </c-input-body>
          </c-input>
        </c-input-group>
      </template>
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
