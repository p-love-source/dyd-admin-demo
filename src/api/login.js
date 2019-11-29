import http from "../test-net/test-http";

/**
 * 登录
 * */ 
export function loginIn (username, password) {
    console.log(username,password);
    return http({
        url: "/user_verify",
        method: "GET",
        data: {username: username, password: password}
    })
}
/**
 * 退出
 * */ 
export function loginOut (token) {
    return http({
        url: "/test",
        method: "GET",
        data: { token, token}
    })
}
/**
 * 登录成功后 ==> 获取用户权限信息
 * */ 
export function getInfo (role) {
    return http({
        url: "/auth",
        method: "GET",
        data: {role: role}
    })
}

/**
 * 获取权限
 * */ 
export function getAuth () {
    return http({
        url: "/auth",
        method: "GET"
    })
}