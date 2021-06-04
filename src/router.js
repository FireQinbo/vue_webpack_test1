import Vue from 'vue'
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)

//导入需要路由的组件
import HomeContainer from "@/components/tabbar/HomeContainer";
import MemberContainer from "@/components/tabbar/MemberContainer";
import SearchContainer from "@/components/tabbar/SearchContainer";
import ShopcarContainer from "@/components/tabbar/ShopcarContainer";
import NewsList from "@/components/news/NewsList";
import NewsInfo from "@/components/news/NewsInfo";

//new一个路由实例对象，供外部使用
export default new VueRouter({
    //配置路由规则
    routes:[
        //路由重定向，如果是根路径 则重定向到首页
        {path: '/', redirect: '/home'},
        //注意：path对应router-link中to的路径
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
        //跳转到新闻资讯列表
        {path: '/home/newsList', component: NewsList},
        //跳转到新闻详情
        {path: '/home/newsInfo/:id', component: NewsInfo}
    ],
    //覆盖默认的选中路由高亮的类(router-link-active)
    linkActiveClass:'mui-active'
})