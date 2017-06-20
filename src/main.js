/* 引入 Vue 的基础文件 */
import Vue from 'vue'
import App from './App'
/* 引入路由  */
import router from './router'
/* 引入Vuex */
import store from './store'
/* fastclick 去除点击事件 300ms 延迟  加快点击速度 （touch.js 会有 点击穿透 bug 所以选择 fastclick） */
import FastClick from 'fastclick'

/* 引入公共 js 和 css  */
import '@script/flexible' // rem 适配
import '@style/base.css'  // reset css 


Vue.config.productionTip = false


// Fastclick Dom 绑定
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
