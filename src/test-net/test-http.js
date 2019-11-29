/**
 * axios封装
 * 请求拦截、响应拦截、错误处理
 * */
import axios from "axios";
import router from "../router";
import {
    Message
} from "element-ui";
import store from "../store";

/**
 * 提示弹框
 * */
const tip = msg => {
    console.log(msg)
    Message(msg);
}

/**
 * 去登录页面
 * */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/**
 * @param 请求失败后，错误统一处理
 * @param {Number} status 状态码 ==> 401、403、404等
 * */
const errorHandle = (status, other) => {
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
            // 403 token过期
            // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
            // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            // 其它状态码
            console.log(other);
    }
}

// 创建axios实例
var instance = axios.create();
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
function http({
    url,
    method,
    data,
    headers
}) {
    return new Promise((resolve, reject) => {
        console.log(url, method, data, headers);
        /** 
         * 请求拦截器 
         * 每次请求前，如果存在token则在请求头中携带token 
         */
        instance.interceptors.request.use(
            config => {
                // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
                // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
                // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
                // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

                // const token = store.state.token;
                // token && (config.headers.Authorization = token);

                config.timeout = config.timeout || 10000; // 超时默认10秒
                // 请求头
                // config.headers = {
                //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                //     ...config.headers
                // }

                if (config.method == "post") {
                    config.data = config.data || {};
                } else if (config.method == "get") {
                    config.params = config.data;
                }
                // TODO 对参数做处理
                console.log("request:", config);
                // console.log(config);
                return config;
            },
            error => Promise.error(error))

        // 响应拦截器
        instance.interceptors.response.use(
            // 请求成功
            res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
            // 请求失败
            error => {
                const {
                    response
                } = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围 
                    console.log("--请求失败--状态码不再2xx范围中--");
                    errorHandle(response.status, response.data.message);
                    return Promise.reject(response);
                } else {
                    // 处理断网的情况
                    // eg:请求超时或断网时，更新state的network状态
                    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
                    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
                    console.log("--断网了--");
                    store.commit('changeNetwork', false);
                }
            });


        axios({
            url,
            method,
            data,
            headers
        }).then(res => {
            // console.log("res",res);
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export default http;