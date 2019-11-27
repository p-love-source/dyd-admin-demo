// 异步 ==》通过后台接口请求数据 (只获取数据)
import json from "../static/json/nav.json";
import { getLoginData } from "../api/index";

export default {
    loginData ({commit}, data) {
        // console.log(commit,data);
        getLoginData(commit);
    },
    getAuthList ({commit}) {
        
    },
    getNavData({commit}) {

        commit("PAGE_NAV_LIST", json.nav_list);
    },
    getManageList() {
        this.commit("MANAGE_NAV_LIST", json.manage_list);
    }
}