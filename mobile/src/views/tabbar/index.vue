<template>
  <div class="v-tabbar">
    <c-tabbar type="primary">
      <c-tabbar-item
        to="/pages/home/index"
        src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
        active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
        text="首页"
      />
      <c-tabbar-item
        to="/pages/company/index"
        src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
        active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
        text="公司"
      />
      <c-tabbar-item
        @click="$_to('/pages/cart/index')"
        src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
        active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
        text="购物车"
      />
      <c-tabbar-item
        to="/pages/user/index"
        src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
        active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
        text="我的"
      />
    </c-tabbar>
    <c-container fixed="bottom" background-color="#f5f5f5" safe-area>
      <c-tabbar shadow>
        <c-tabbar-item
          active
          to="/pages/home/index"
          src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
          active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
          text="首页"
        />
        <c-tabbar-item
          to="/pages/company/index"
          src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
          active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
          text="公司"
        />
        <c-tabbar-item
          @click="$_to('/pages/cart/index')"
          badge="132"
          src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
          active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
          text="购物车"
        />
        <c-tabbar-item
          to="/pages/user/index"
          src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
          active-src="https://image1.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile"
          text="我的"
        />
      </c-tabbar>
    </c-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
