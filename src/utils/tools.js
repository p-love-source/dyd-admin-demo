/**工具函数*/
/**
 * @param 获取字符的个数
 * */
export function getTextLen(val) {
    var str = new String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    return bytesCount;
}
/**
 * @param 解析url转换成参数对象
 * */
export function getParams(url) {
    let result = {};
    if (url.indexOf("?") > -1) {
        let str = url.split("?")[1].split("&");
        for (let i = 0; i < str.length; i++) {
            let temp = str[i].split("=");
            result[temp[0]] = temp[1];
        }
    }
    return result;
}

/**
 * 获取请求url ==>域名 + /api/api
 * */
export function getUrl() {
    return `${window.location.host}/api/api`;
}
/**
 * 解析link,获取参数对象
 * */
export function getParam(url) {
    let result = {};
    if (url.indexOf("?") > -1) {
        let str = url.split("?")[1].split("&");
        for (let i = 0; i < str.length; i++) {
            let temp = str[i].split("=");
            result[temp[0]] = temp[1];
        }
    }
    return result;
}
/**
 * 获取字符的个数
 * */
export function getLen(val) {
    var str = new String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    return bytesCount;
}

/**
 * 函数节流
 * @param {Function} fn 执行函数
 * @param {Number} delay 节流时间
 * */
export function throttle(fn, delay) {
    clearTimeout(fn.tid);
    fn.tid = setTimeout(() => {
        fn.call();
    }, delay || 200);
}
/**
 * 一维数组转换成二维数组
 * @param 数组的值为引用数据类型
 * @param {Array} list 数据源
 * @param {Number} num 二维数组的长度，默认为2
 * */
export function changeArray(list, num = 2) {
    let len = list.length;
    let lineNum = Math.ceil(len / num);
    let midArr = [];
    for (let i = 0; i < lineNum; i++) {
        let mid = list.slice(i * num, i * num + num);
        mid = JSON.parse(JSON.stringify(mid));
        midArr.push(mid);
    }
    // midArr[0][0]["a"] = 100;
    // console.log(midArr);
    return midArr;
}
/**
 * @param 给数组对象添加属性
 * */
export function addAttr(list, callback) {
    if (!list || list.length == 0) {
        return [];
    }
    let midArr = [];
    list.map((val, idx) => {
        midArr[idx] = JSON.parse(JSON.stringify(callback(val, idx)));
    })
    // console.log("midArr",midArr);
    return midArr;
}