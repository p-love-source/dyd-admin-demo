// 请求数据api
import { post } from "../net/http";

/**
 * @param 登录
 * */
export const getLoginData = (commit) => {
    post({
        api_name: "kyk.richLandlord.richLandlordData"
    }).then(res => {
        console.log("login-res:", res)
        commit("loginData", res);
        // return res;
    })
}