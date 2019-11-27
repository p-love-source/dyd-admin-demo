import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import { getAuthRouter } from "./auth";

// 不变的路由
const constantRouterMap = [
  {
    path: "/",
    redirect: "/login",
    hidden: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      title: "登录",
      auth: true // 用来验证登录后才能查看
    }
  },
  {
    path: "/Index",
    name: "index",
    component: ()=> import(/* webpackChunkName: "home" */ "../views/Index.vue"),
    meta: {
      title: "首页",
      auth: true
    }
  },
  {
    path: "/operations/OperationsSigninConfig",
    name: "signin-config",
    component: ()=> import(/* webpackChunkName: "operationssigninconfig" */ "../views/operations/OperationsSigninConfig"),
    meta: {
      title: "签到列表"
    }
  }
]

// 加载出错404
const pageError404 = [
  {
    path: "404",
    name: "404",
    component: () => (/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404",
      auth: true
    }
  }
]
let routes = constantRouterMap.concat(getAuthRouter());
console.log("total-router:",routes);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Router.beforEach((to, form, next) => {
//   console.log(to,form,next);
// })

