import Axios from "axios";
const axios = Axios.create();

function http(
    url,
    method,
    data,
    headers
) {
    return new Promise((resolve, reject) => {
        methods = methods || "post";
        // http 请求拦截
        axios.interceptors.request.use(config => {
            // 设置参数
            config.timeout = config.timeout || 10000; // 超时默认10秒
            // 请求头
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                ...config.headers
            }
            // 请求参数
            if (config.method == "post") {
                config.data = config.data || {};
            } else if (config.method == "get") {
                config.params = config.data;
            }
            // TODO 对参数做处理
            console.log("request:", config);
            return config;
        }, err => {
            // TODO toast错误提示
            return Promise.reject(err);
        })

        // 响应拦截 
        axios.interceptors.response.use(response => {
            let res = response.data;
            console.log("response:", res);
            // if (res.code == 1000) {
            //     return res;
            // }
            if (typeof res == "string") {
                return JSON.parse(res);
            } else {
                return res;
            }
            // TODO 出错处理 isSelf  是否自行处理
        }, err => {
            if (err.response.status) {
                switch (err.response.status) {
                    case "401": // 未登录
                        //401: 未登录
                        // 未登录则跳转登录页面，并携带当前页面的路径
                        // 在登录成功后返回当前页面，这一步需要在登录页操作。
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                        break;
                    case "403": // 登录过期
                        // 登录过期对用户进行提示
                        // 清除本地token和清空vuex中token对象
                        // 跳转登录页面   
                        Toast({
                            message: '登录过期，请重新登录',
                            duration: 1000,
                            forbidClick: true
                        });
                        // 清除token
                        localStorage.removeItem('token');
                        store.commit('loginSuccess', null);
                        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                        setTimeout(() => {
                            router.replace({
                                path: '/login',
                                query: {
                                    redirect: router.currentRoute.fullPath
                                }
                            });
                        }, 1000);
                        break;
                    case "404":
                        Toast({
                            message: '网络请求不存在',
                            duration: 1500,
                            forbidClick: true
                        });
                        break;
                    default:
                        // 其它错误抛出错误提示
                        Toast({
                            message: error.response.data.message,
                            duration: 1500,
                            forbidClick: true
                        });

                        break;
                }
                // TODO toast错误提示
                return Promise.reject(err);
            }
        })

        axios({
            url,
            method,
            data,
            headers
        }).then(res => {
            console.log(res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export default http;