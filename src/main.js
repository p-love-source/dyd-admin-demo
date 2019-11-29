import Cookies from "js-cookie";

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/base.css";
import "./assets/global.less";

// 上线依赖第三方模块
// "screenfull": "4.2.0",
// "showdown": "1.9.0",
// "sortablejs": "1.8.4",
// "tui-editor": "1.3.3",
// "vue": "2.6.10",
// "vue-count-to": "1.0.13",
// "vue-router": "3.0.2",
// "vue-splitpane": "1.0.4",
// "vuedraggable": "2.20.0",
// "vuex": "3.1.0",
// "xlsx": "0.14.1"


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
//     "connect": "3.6.6",
//     "eslint": "5.15.3",
//     "eslint-plugin-vue": "5.2.2",
//     "html-webpack-plugin": "3.2.0",
//     "husky": "1.3.1",
//     "lint-staged": "8.1.5",
//     "mockjs": "1.0.1-beta3",
//     "node-sass": "^4.9.0",
//     "plop": "2.3.0",
//     "runjs": "^4.3.2",
//     "sass-loader": "^7.1.0",
//     "script-ext-html-webpack-plugin": "2.1.3",
//     "script-loader": "0.7.2",
//     "serve-static": "^1.13.2",
//     "svg-sprite-loader": "4.1.3",
//     "svgo": "1.2.0",
//     "vue-template-compiler": "2.6.10"






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