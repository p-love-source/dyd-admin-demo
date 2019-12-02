import Layout from "@/layout";

const componentsRouter = [
    {
        path: "/components",
        redirect: "noRedirect",
        name: "ComponentDemo",
        components: Layout,
        mate: {
            title: "Components",
            icon: "component"
        },
        children: [
            {
                path: "theme",
                name: "Theme",
                component: () => import( /* webpackChunkName: "orderstatistic" */ "../../views/components-demo/Theme.vue"),
                mate: {
                    title: "Theme"
                }
            }
        ]
    }
]


export default componentsRouter;