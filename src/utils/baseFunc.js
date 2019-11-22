// 基本的计算函数
/**
 * @param 求和
 * */ 
const add = (x,y) => x + y;
/**
 * @param 求差
 * */
const sub = (x,y) => x - y;
/**
 * @param 求积
 * */
const mul = (x,y) => x*y;
/**
 * @param 求商(x/y)
 * */
const divide = (x,y) => x/y;
/**
 * @param 取余
 * */
const remain = (x,y) => x%y;
/**
 * @param 参数一是否相等参数二
 * */
const equal = (x,y) => x == y ? true : false;
/**
 * @param 参数一是否大于参数二 
 * */
const great = (x,y) => x > y ? true : false;
/**
 * @param 参数一是否小于参数二
 * */
const less = (x,y) => x < y ? true : false;
/**
 * @param 判断一个值在不在其中
 * @param 1、参数一：判断类型；2、参数二：返回布尔值，是否存在
 * */ 
const findTarget = (typeFn, boolFn) => {
    // target 可能为对象、字符串、数组 ==> 数组可能为any[]
}

const basicTypeDetect = arg => {
    console.log(typeof arg);
}

// 判断一个对象中是否有某个属性,有就替换，没有就新增
const isObjAttr = (obj, data) => {
    
}

export { add, sub, mul, divide, remain, equal, great, less };
