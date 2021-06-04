import Vue from 'vue'
import App from './App.vue'
//使用vue-resource发起网络请求
import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置VueResource的全局属性，这里配置访问后端Api接口的域名地址
// Vue.http.options.root = 'https://192.168.137.1:8082/jeecg-boot/'
Vue.http.options.root = 'https://192.168.137.1:8443/myblog/'

//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器-格式化日期
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
});

//导入第三方UI组件
import MintUI from 'mint-ui'
//导入样式
import 'mint-ui/lib/style.css'
//将第三方组件安装到Vue中
Vue.use(MintUI)

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入MUI(类似bootstrap)
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

//导入自己的路由模块
import router from './router'

new Vue({
  render: h => h(App),
  //挂载自己的路由模块到VM实例中
  router
}).$mount('#app')
