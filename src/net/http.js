import axios from "./axios";
import QS from "qs"; // 参数序列化
import Md5 from "./md5";

let url = "http://test.51k1k.com/inline_frame/alliance-activity/#/home?access_token=shopping:login_user_9c1b18170f0e8679dad3fe4a240fa500";

const domain = {
    public: "http://app.51k1k.com",
    beta: "http://beta.test.51k1k.com",
    test: "http://test.51k1k.com"
}


let root = domain.test;
console.log(root);

let access_token = "shopping:login_user_9c1b18170f0e8679dad3fe4a240fa500";

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            console.log("get:", res);
            resolve(res.data);
        }).catch(err => {
            // TODO 错误提示
            console.log("get-err:", err);
            reject(err.data);
        })
    })
}

export function post(params) {
    let time = new Date().getTime() / 1000;
    params.appid = "1";
    params.token = "eb86fa064482989312e2a1557ddb4032";
    params.access_token = access_token;
    params.os = "wx";
    params.app_version = "1.0";
    params.channel_id = "0";
    params.time = time;
    params.sign = Md5.hex_md5(
        access_token + time + "ijJeFyo0U2fOBEd0olKBUx8zWcgIo68d"
    );
    const options = {
        url: `${root}/api/api`,
        method: "post",
        data: QS.stringify(params)
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
                console.log("post-res:", res);
                resolve(res.data);
            })
            .catch(err => {
                console.log("post-err:", err);
                reject(err.data)
            })
    })

    // return new Promise((resolve, reject) => {
        // TODO 出错了
    //     axios.post(options)
    //         .then(res => {
    //             console.log("post-res:", res);
    //             resolve(res.data);
    //         })
    //         .catch(err => {
    //             console.log("post-err:", err);
    //             reject(err.data)
    //         })
    // });
}