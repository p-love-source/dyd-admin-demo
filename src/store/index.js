import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

const isDev = process.env.NODE_ENV === 'development'

// 使用require.context实现前端工程自动化
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/); // 返回一个webpackConText函数,该函数有三个参数resolve,keys,id

// console.log(modulesFiles.keys());

// reduce 计算数组元素相加后的总和
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // console.log(modules,modulePath);
  // set ./app.js ==> app
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  // console.log(moduleName);
  const value = modulesFiles(modulePath);
  // console.log(value);
  modules[moduleName] = value.default;
  // console.log(modules);
  return modules;
},{})


Vue.use(Vuex);

export default new Vuex.Store({
  strict: isDev,
  modules,
  getters
});
