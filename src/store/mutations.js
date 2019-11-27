// 同步 ==>用来给state数据模型赋值 (只修改数据) (方法为纯函数,异步请求完成后改变state中的数据模型在此处进行)

export default {
    loginData (state, data) {
        console.log("mutations-data:",data);
    },
    PAGE_NAV_LIST(state, data) {
        state.nav_list = data;
    },
    MANAGE_NAV_LIST(state, data) {
        state.manage_list = data;
    },
    SET_MANAGE_NAV_STYLE(state, data) {
        state.curSelIndex = data;
    },
    SET_BREADCRUMB(state) {
        let _data = [{
                name: "首页",
                path: "/system/system_setup/home"
            },
            {
                name: "添加banner图",
                path: "/operations/banner/addbanner"
            },
            {
                name: "管理员列表",
                path: "/manage_child"
            }
        ]
        state.breadcrumb_list = _data;
    }
}