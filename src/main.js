import Cookies from "js-cookie"; // 处理cookies模块
 
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/less/base.less"; 
import "./styles/less/global.less"; 


import "./permission"; // 授权模块
import "./importElement"; // 全局组件注册模块

// 开发依赖
// "@babel/core": "7.0.0",
//     "@babel/register": "7.0.0",
//     "@vue/cli-plugin-babel": "3.5.3",
//     "@vue/cli-plugin-eslint": "^3.9.1",
//     "@vue/cli-plugin-unit-jest": "3.5.3",
//     "@vue/cli-service": "3.5.3",
//     "@vue/test-utils": "1.0.0-beta.29",
//     "autoprefixer": "^9.5.1",
//     "babel-core": "7.0.0-bridge.0",
//     "babel-eslint": "10.0.1",
//     "babel-jest": "23.6.0",
//     "chalk": "2.4.2",
//     "chokidar": "2.1.5",
//     "eslint": "5.15.3",
//     "eslint-plugin-vue": "5.2.2",
//     "lint-staged": "8.1.5",
//     "node-sass": "^4.9.0",
//     "plop": "2.3.0",
//     "serve-static": "^1.13.2",
//     "svgo": "1.2.0",




// 导入element-ui模块
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: "small",
  zIndex: 3000
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");