<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.titleImg">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.createTime | dateFormat}}</span>
              <span>点击次数：{{ item.clickNum }}</span>
            </p>
          </div>
        </router-link>
      </li>
<!--      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://portrait.gitee.com/uploads/avatars/user/430/1291436_fire_qinbo_1578948237.png!avatar30">
          <div class="mui-media-body">
            <h1>标题</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：2021-06-03 15:46:05</span>
              <span>点击次数：12</span>
            </p>
          </div>
        </a>
      </li>-->
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  name: "NewsList",
  data(){
    return{
      newsList:[]
    }
  },
  created() {
    this.getNewsList()
  },
  methods:{
    getNewsList(){
      this.$http.get('mb/getArticles').then(res => {
        if (res.body.code === 1) {
          this.newsList = res.body.result
          Toast({
            message: '数据加载成功！',
            position: 'bottom',
            duration: 1000
          });
        } else {
          Toast({
            message: '数据加载失败！',
            position: 'bottom',
            duration: 1000
          });
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>