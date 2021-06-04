<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsInfo.createTime | dateFormat }}</span>
      <span>点击次数：{{ newsInfo.clickNum }}</span>
    </p>

    <hr>

    <!--   这种内容一般是带html的富文本内容，用v-html渲染 -->
    <!-- 内容区   -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论子组件区域   -->
<!--  评论组件需要文章id，这里涉及到父组件向子组件传值：使用属性绑定的形式传递 子组件中定义props属性即可拿到  -->
    <comment-box :articleId="this.id"></comment-box>
  </div>
</template>

<script>
//在需要的地方导入评论组件
import Comments from "@/components/comments/Comments";

export default {
  name: "NewsInfo",
  //注册组件评论组件，并起名为comment-box
  components: {
    "comment-box": Comments
  },
  data() {
    return {
      //获取新闻列表页面通过路由传递过来的id
      id: this.$route.params.id,
      newsInfo: {}
    }
  },
  created() {
    this.getNesInfoById()
  },
  methods: {
    getNesInfoById() {
      this.$http.get("mb/getArticleById/" + this.id).then(res => {
        this.newsInfo = res.body.result
      });
    }
  }
}
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;

  .title {
    font-size: 14px;
    text-align: center;
    margin: 14px 0;
  }

  .subtitle {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .content {
    img {
      width: 100%;
    }
  }
}
</style>