// 计算属性 ==》对应组件computed计算属性, ui页面容器通过映射获得数据模型对应的数据(数据双向绑定) 有计算的话在此处进行，例如计算选中的勾选框总数等

export default {
    roles: state => state.user.roles
}