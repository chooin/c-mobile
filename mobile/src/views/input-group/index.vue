<template>
  <div class="v-input-group">
    <c-input-group title="修改用户资料" type="primary">
      <c-input>
        <c-input-head>
          <c-text type="danger">*</c-text>您的姓名
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
          <c-text placeholder="Devin"></c-text>
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
          <c-text>Devin</c-text>
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
          <c-text>上海</c-text>
        </c-input-body>
      </c-input>
      <c-input addon>
        <c-input-head>
          所在城市
        </c-input-head>
        <c-input-body>
          <c-text type="success">上海</c-text>
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
      <c-input addon next>
        <c-input-head>
          select
        </c-input-head>
        <c-input-body>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="user" background-color="#39f" color="#fff" size="3rem" round />Devin
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="search" color="#737373" size="3rem" />搜索
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="wishlist" background-color="#f90" color="#fff" size="3rem" />收藏
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon next icon>
        <c-input-head>
          <c-icon name="wishlisted" background-color="#f30" color="#fff" size="3rem" round />已收藏
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input addon use-div>
        <c-input-head>
          自动定位
        </c-input-head>
        <c-input-body>
          <c-switch type="primary" v-model="switchStatus" />
        </c-input-body>
      </c-input>
      <c-input use-div addon>
        <c-input-head>
          订阅
        </c-input-head>
        <c-input-body>
          <c-button type="primary" small>订阅</c-button>
        </c-input-body>
      </c-input>
      <c-input use-div addon>
        <c-input-head>
          订阅
        </c-input-head>
        <c-input-body>
          <c-button type="primary" small>发送验证码</c-button>
          <input type="text" placeholder="请输入验证码">
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

    <c-input-group title="选择城市" type="danger">
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

    <c-radio-group v-model="raidoValue" @change="onChange">
      <c-input-group :title="`品牌：${raidoValue}`">
        <c-input>
          <c-input-body>
            <c-radio value="Apple">Apple</c-radio>
          </c-input-body>
        </c-input>
        <c-input>
          <c-input-body>
            <c-radio value="Huawei">Huawei</c-radio>
          </c-input-body>
        </c-input>
        <c-input>
          <c-input-body>
            <c-radio value="Vivo">Vivo</c-radio>
          </c-input-body>
        </c-input>
      </c-input-group>
    </c-radio-group>

    <c-input-group noborder title="没有上下 border" type="success">
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <c-input-group noborder-top title="没有上 border">
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <c-input-group noborder-bottom title="没有下 border">
      <c-input>
        <c-input-head>
          您的姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
    </c-input-group>

    <c-input-group title="没有中间的边框">
      <c-input noborder-top>
        <c-input-head>
          浦东新区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input noborder-top>
        <c-input-head>
          浦东新区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
      <c-input noborder-top>
        <c-input-head>
          浦东新区
        </c-input-head>
        <c-input-body>
        </c-input-body>
      </c-input>
    </c-input-group>

    <c-input-group title="日期">
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
    <c-input-group title="图片上传" class="pb-15">
      <c-input addon>
        <c-input-head>
          选择时间
        </c-input-head>
        <c-input-body>
          <input type="datetime-local">
        </c-input-body>
      </c-input>
      <c-input-upload
        title="上传图片（允许删除，<input file /> 上传）"
        amount="1/2"
        show-upload-input
        allow-upload>
        <c-input-upload-file src=" " />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
      </c-input-upload>
      <c-input-upload
        amount="1/2"
        :show-upload-input="false"
        allow-upload
        :allow-delete="false">
        <template slot="title">
          <c-text type="danger">*</c-text>
          上传图片（不允许删除，事件上传）
        </template>
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <c-input-upload-file src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg" />
        <div slot="upload-btn"></div>
      </c-input-upload>
    </c-input-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switchStatus: false,
      raidoValue: null
    }
  },
  methods: {
    onChange (v) {
      this.$Toast(v)
    }
  }
}
</script>

