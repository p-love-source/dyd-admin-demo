// 计算属性 ==》对应组件computed计算属性, ui页面容器通过映射获得数据模型对应的数据(数据双向绑定) 有计算的话在此处进行，例如计算选中的勾选框总数等

export default {
    nav_list(state) {
        return state.nav_list;
    },
    manage_list(state) {
        return state.manage_list;
    },
    curSelIndex(state) {
        return state.curSelIndex;
    },
    breadcrumb_list(state) {
        // console.log("面包屑:", state.breadcrumb_list);
        return state.breadcrumb_list;
    }
}