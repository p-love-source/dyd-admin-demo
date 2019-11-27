import http from "../net/axios";

/**
 * 登录
 * */ 
export function userLogin (data) {
    return http({
        url: "/login",
        method: "post",
        data: data
    })
}