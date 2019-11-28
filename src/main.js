import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { post } from "./net/http";

import "./assets/base.css";
import "./assets/global.less";
// 导入element-ui模块
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, {
  size: "small",
  zIndex: 3000
});
Vue.config.productionTip = false;



// Vue.prototype.$api = post;

// 保留小数
Vue.filter("two-decimals", function (data, num = 2) {

})
// 取整
Vue.filter("integer", function (data, type) {
  let mid;
  mid = type == "down" ? Math.floor(data) : Math.ceil(data);
  return mid;
})
// 控制描述文字长度，超过用(...)代替
Vue.filter("controlTextLength", function (data) {

})
// 格式化时间(时间戳变时间格式显示)
Vue.filter("formatTime", function (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      var str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");