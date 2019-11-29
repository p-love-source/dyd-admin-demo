// 常用的原生js属性方法的使用
let { protocol, host, port, pathname, search, hash } = window.location;

/**
 * @param 检测数据类型
 * @param {any} data 数据源
 * @return 返回数据类型
 * */ 
export function getDataType(data) {
    // Object toString方法获取类型
    const str = Object.prototype.toString.call(data)
    console.log(str.match(/\s(\w*)\]/));
    return str.match(/\s(\w*)\]/)[1].toLowerCase()
}

/**
 * @param 深拷贝
 * @param {Object|Array} data 数据源
 * @return {Object|Array} 
 * */
export function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
} 