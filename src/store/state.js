// 数据模型 ==》数据集中管理

const login = {
    mode: "login",
    list: []
}

const slider = {
    mode: "slider",
    list: []
}

const breadCrumb = {
    list: []
}

const nav = {
    list: []
}

const breadcrumb_list = [];
const manage_list = [];
const curSelIndex = -1;
const nav_list = [];

const token = "123456";

export default {
    login,
    breadcrumb_list,
    manage_list,
    curSelIndex,
    nav_list,
    token
}