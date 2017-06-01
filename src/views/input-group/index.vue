<template>
  <div class="v-input-group">
    <h4 class="pl-15">修改用户资料</h4>
    <c-input-group>
      <c-input-upload title="上传图片" allow-upload wechat-upload>
        <c-input-upload-file
          src="//m.360buyimg.com/mobilecms/s220x220_jfs/t5869/20/124121910/48020/da8d9594/591d7582Nb8573479.jpg!q70.jpg"
        />
      </c-input-upload>
      <c-input>
        <c-input-head>
          姓名
        </c-input-head>
        <c-input-body>
          <input type="text" placeholder="请输入姓名">
        </c-input-body>
      </c-input>
      <c-input next>
        <c-input-head>
          所在城市
        </c-input-head>
        <c-input-body>
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
