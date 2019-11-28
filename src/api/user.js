import http from "../test-net/test-http";

export function loginIn (username, password) {
    return http({
        url: "/test",
        method: "GET",
        data: {username: username, password: password}
    })
}

export function getAuth () {
    return http({
        url: "/auth",
        method: "GET"
    })
}