<!--评论组件-->
<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容(最多120字)" maxlength="120" style="height: 100px"></textarea>
    <mt-button type="primary" size="large">提交</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentsList" :key="item.id">
        <div class="cmt-title">
          第{{ index + 1 }}楼&nbsp;&nbsp;用户:{{ item.userId }}&nbsp;&nbsp;发表时间:{{ item.createTime | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === '' || item.content === null || item.content === 'undefined' ? "此用户暂未发表评论！":item.content}}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多...</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  name: "Comments",
  data(){
    return{
      commentsList:[],
      pageIndex:1,
      totalNum:0
    }
  },
  props:["articleId"],
  created() {
    this.getCommentsByArticleId()
  },
  methods:{
    //获取评论
    getCommentsByArticleId() {
      this.$http.get("mb/getCommentsByArticleId/" + this.articleId + "?pageIndex=" + this.pageIndex).then(res => {
        // this.commentsList = res.body.result
        //加载更多时，不应该覆盖原有数据 使用数组拼接（concat）原有数组
        this.commentsList = this.commentsList.concat(res.body.result.data)
        this.totalNum = res.body.result.total
      });
    },
    //获取更多评论
    getMoreComments() {
      if (this.commentsList.length === this.totalNum) {
        return Toast({
          message: '暂无更多数据！',
          position: 'bottom',
          duration: 1000
        });
      }
      this.pageIndex++;
      this.getCommentsByArticleId()
    }
  }
}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 14px;
  }
  textarea{
    font-size: 12px;
    margin: 0;
  }

  .cmt-list{
    margin: 5px 0;
    .cmt-item{
      font-size: 12px;
      .cmt-title{
        line-height: 30px;
        background-color: #42b983;
        display: flex;
        justify-content: space-between;
      }
      .cmt-body{
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}

</style>