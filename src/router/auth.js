// 授权 (控制权限)

// 动态路由(通过权限来控制)
const asyncRouterMap = [{
    path: "/user",
    redirect: "/user/UserManage",
    name: "user-manage",
    component: () => import( /* webpackChunkName: "usermanage" */ "../views/user/components/UserManage.vue"),
    meta: {
      title: "用户列表",
      icon: "",
      auth: false, // 设置登录后才能查看
      roles: ["system"] // 角色显示
    }
  },
  {
    path: "/order/OrderStatistic",
    name: "order-statistic",
    component: () => import( /* webpackChunkName: "orderstatistic" */ "../views/order/OrderStatistic.vue"),
    meta: {
      title: "订单统计",
      auth: false,
      icon: "",
      roles: ["order"]
    }
  },
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