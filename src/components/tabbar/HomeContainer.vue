<template>
  <div>
    <!-- 轮播图   -->
    <mt-swipe :auto="3000" :speed="2000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.titleImg" class="lunbotu-img"/>
      </mt-swipe-item>
    </mt-swipe>

    <!--  九宫格  -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: "HomeContainer",
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu()
  },
  methods: {
    getLunbotu() {
      //注意：VueResource路径地址前面不能加"/"
      this.$http.get("mb/getArticles").then(res => {
        console.log(res.body)
        if (res.body.code === 1) {
          this.lunbotuList = res.body.result
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
/*轮播图样式设置*/
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #2ac845;
    }

    &:nth-child(2) {
      background-color: #54885d;
    }

    &:nth-child(3) {
      background-color: #2333c1;
    }

    /*设置轮播图大小*/
    .lunbotu-img {
      width: 100%;
      height: 100%;
    }
  }
}

/*九宫格样式设置*/
.mui-grid-view.mui-grid-9 {
  background-color: white;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

.mui-media-body {
  font-size: 13px;
}


</style>