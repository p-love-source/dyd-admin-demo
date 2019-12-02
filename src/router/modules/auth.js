// 授权 (控制权限)
import Layout from "@/layout";

// 动态路由(通过权限来控制)
const asyncRouterMap = [{
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    children: [{
      path: "index",
      name: "UserManage",
      // component: () => import( /* webpackChunkName: "usermanage" */ "@/views/user/index"),
      component: () => import("@/views/user/index"),
      meta: {
        title: "用户列表",
        icon: "",
        auth: false, // 设置登录后才能查看
        roles: ["system"] // 角色显示
      }
    }]
  },
  {
    path: "/order",
    component: Layout,
    redirect: "/order/index",
    children: [{
      path: "index",
      name: "OrderStatistic",
      component: () => import( /* webpackChunkName: "orderstatistic" */ "@/views/order/index"),
      meta: {
        title: "订单统计",
        icon: "",
        noCache: true,
        roles: ["order"]
      }
    }]
  }
]

export function getAuthRouter() {
  let routers = [];
  // TODO 1、添加授权的路由，2、将授权的路由暴露出去
  asyncRouterMap.map(val => {
    routers.push(val);
  })
  // console.log(routers);
  return routers;
}