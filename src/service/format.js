//  格式化时间戳变日期时间
function formatTime(date,fmt){
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (var k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            var str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
        }
    }
    return fmt
}
// 获取字符的个数
function getTextLen(val) {
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
// 解析url转换成参数对象
function getParams(url){
    let result = {};
    if(url.indexOf("?") > -1){
        let str = url.split("?")[1].split("&");
        for(let i = 0; i < str.length; i++){
            let temp = str[i].split("=");
            result[temp[0]] = temp[1];
        }
    }
    return result;
}
// 手机号做安全处理(只显示头三位加最后一位)
function formatModile(data){
    let str = data + "";
    return `${str.substr(0,3)}*******${str.substr(str.length-1,str.length)}`
}
export default { formatTime, getTextLen, getParams, formatModile}