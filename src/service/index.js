import qs from "qs";
import md5 from "./md5";
import axios from "axios";
let root = '';
let path = '';
let access_token = "";
// if (process.env.NODE_ENV == 'development') {
//     root = 'http://test.51k1k.com/api/api' //测试
//     path = 'http://test.51k1k.com'

//     access_token = 'bfe95b8f94bdc8d8401cf0b4eea88364'
// } else if (process.env.NODE_ENV == 'production') {
//     root = 'http://app.51k1k.com/api/api' //测试
//     path = 'http://app.51k1k.com'
// }
// path = 'http://test.51k1k.com'
    root = 'http://beta.test.51k1k.com/api/api' //测试
    access_token = 'bfe95b8f94bdc8d8401cf0b4eea88364'

function apiAxios(params,success){
    // 公共参数
    let time = (new Date().getTime()) / 1000;
        params.appid = '1'
        params.token = 'eb86fa064482989312e2a1557ddb4032'
        params.access_token = access_token
        params.os = 'wx'
        params.app_version = '1.0'
        params.channel_id = '0'
        params.time = time
        params.sign = md5.hex_md5(access_token + time + "ijJeFyo0U2fOBEd0olKBUx8zWcgIo68d")
        // let _str = "";
        // for (let i in params) {
        //     _str += `${i}=${params[i]}&`;
        // }
        // _str = _str.slice(0, _str.length - 1);
        // console.log(url,_str);
        axios({
            method: "POST",
            url: root,
            data: qs.stringify(params)
        })
        .then(res => {
            // console.log(res);
            success(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
// 上传图片
function update(e,success){
    let file = e.target.files[0];
    let param = new FormData(); //创建form对象
    param.append('upfile', file, file.name); //通过append向form对象添加数据
    let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }; //添加请求头	
    axios.post(path + '/api/uploadImage/appid/1/submit/submit/os/wx', param, config)
        .then(res => {
            if (res.data.code == 0) {
                success(res.data)
            } else {
                console.log(res.data.error_msg);
            }
        })
}

export default {
    post: function(params,success){
        return apiAxios(params, success);
    },
    update: function(e,success){
        return update(e,success);
    }
}