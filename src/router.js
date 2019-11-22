import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 不变的路由
const constantRouterMap = [
  {
    path: "/",
    redirect: "/Index",
    hidden: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/Index",
    name: "index",
    component: ()=> import(/* webpackChunkName: "home" */ "./views/Index.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/operations/OperationsSigninConfig",
    name: "signin-config",
    component: ()=> import(/* webpackChunkName: "operationssigninconfig" */ "./views/operations/OperationsSigninConfig"),
    meta: {
      title: "签到列表"
    }
  }
]

// 异步挂载的路由(根据权限动态控制路由)
const asyncRouterMap = [
  {
    path: "/user/UserManage",
    name: "user-manage",
    component: ()=> import(/* webpackChunkName: "usermanage" */ "./views/user/UserManage.vue"),
    meta: {
      title: "用户列表",
      icon: "",
      roles: ["one_admin"]
    }
  },
  {
    path: "/order/OrderStatistic",
    name: "order-statistic",
    component: ()=> import(/* webpackChunkName: "orderstatistic" */ "./views/order/OrderStatistic.vue"),
    meta: {
      title: "订单统计",
      icon: "",
      roles: ["two_admin"]
    }
  }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

// Router.beforEach((to, form, next) => {
//   console.log(to,form,next);
// })

