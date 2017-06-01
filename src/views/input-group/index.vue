<template>
  <div class="v-input-group">
    <h4 class="pl-15">修改用户资料</h4>
    <c-input-group>
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <div class="input">Devin</div>
        </c-input-body>
      </c-input>
      <c-input addon>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
      <c-input addon>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <div class="input">Devin</div>
        </c-input-body>
      </c-input>
      <c-input next>
        <c-input-head>
          所在城市
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next>
        <c-input-head>
          所在城市
        </c-input-head>
        <c-input-body>
          <div class="input">上海</div>
        </c-input-body>
      </c-input>
      <c-input addon next>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="user" background-color="var(--primary)" color="#fff" size="3rem" round />Devin
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="search" color="var(--text)" size="3rem" />搜索
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="wishlist" background-color="var(--warning)" color="#fff" size="3rem" />收藏
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="wishlisted" background-color="var(--danger)" color="#fff" size="3rem" round />已收藏
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon switch>
        <c-input-head>
          自动定位
        </c-input-head>
        <c-input-body>
          <c-switch type="primary" />
        </c-input-body>
      </c-input>
      <c-input>
        <c-input-body>
          <textarea placeholder="请输入个人信息"></textarea>
        </c-input-body>
      </c-input>
      <c-input>
        <c-input-body>
          <p class="textarea">1999年下半年，谷歌网站“Google”正式启用。[3]  2010年3月23日，宣布关闭在中国大陆市场搜索服务。2015年8月10日，宣布对企业架构进行调整，并创办了一家名为Alphabet的“伞形公司”（Umbrella Company），成为Alphabet旗下子公司。2015年，在2015年度“世界品牌500强”排行中重返榜首，苹果和亚马逊分别位居第二和第三名。2016年6月8日，《2016年BrandZ全球最具价值品牌百强榜》公布，以2291.98亿美元的品牌价值重新超越苹果成为百强第一。[4]  2017年2月，Brand Finance发布2017年度全球500强品牌榜单，排名第一。</p>
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">选择城市</h4>
    <c-input-group>
      <c-input>
        <c-input-head>
          浦东新区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input checked>
        <c-input-head>
          黄浦区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">没有上下边框</h4>
    <c-input-group noborder>
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">没有上边框</h4>
    <c-input-group noborder-top>
      <c-input v-for="i in 3">
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">没有下边框</h4>
    <c-input-group noborder-bottom>
      <c-input v-for="i in 3">
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">没有中间的边框</h4>
    <c-input-group>
      <c-input v-for="i in 3" noborder-top>
        <c-input-head>
          {{ i }}. 浦东新区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">日期</h4>
    <c-input-group>
      <c-input addon>
        <c-input-head>
          选择日子
        </c-input-head>
        <c-input-body>
          <input type="date">
        </c-input-body>
      </c-input>
      <c-input addon>
        <c-input-head>
          选择时间
        </c-input-head>
        <c-input-body>
          <input type="datetime-local">
        </c-input-body>
      </c-input>
    </c-input-group>

    <h4 class="pl-15">图片上传</h4>
    <c-input-group>
      <c-input-upload
        title="上传身份证"
        amount="1/2"
        :show-upload-input="true"
        allow-upload>
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
      </c-input-upload>
    </c-input-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
