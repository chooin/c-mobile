<template>
  <div class="v-tabbar">
    <c-tabbar type="success">
      <c-tabbar-item current>
        <c-icon name="wishlist" />
        <span>收藏</span>
      </c-tabbar-item>
      <c-tabbar-item>
        <c-icon name="search" />
        <span>探索</span>
      </c-tabbar-item>
      <c-tabbar-item>
        <c-icon name="user" />
        <span>我</span>
      </c-tabbar-item>
    </c-tabbar>

    <c-tabbar type="danger">
      <c-tabbar-item icon="wishlist" text="收藏" current />
      <c-tabbar-item icon="search" text="探索" />
      <c-tabbar-item icon="user" text="我" />
    </c-tabbar>

    <c-tabbar>
      <c-tabbar-item>
        <c-icon name="wishlist" type="success" />
        <c-text>收藏</c-text>
      </c-tabbar-item>
      <c-tabbar-item>
        <c-icon name="search" type="success" />
        <c-text>探索</c-text>
      </c-tabbar-item>
      <c-tabbar-item>
        <c-icon name="user" type="success" />
        <c-text>我</c-text>
      </c-tabbar-item>
    </c-tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
