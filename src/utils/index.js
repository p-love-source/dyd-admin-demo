/**
 * @param 数组求和
 * @param {Array<Number>} arr
 * */ 
const sum = arr => arr.reduce((prev, curr) => prev + curr);
/**
 * @param 给数组对象添加属性
 * @param {{}[]} arr 目标数组
 * @param {Function} fn 返回一个对象(该对象的属性由使用者自己定义),该函数的参数没有具体的限制条件,例如 const fn = val => ({x: val.x, y: val.y})
 * */ 
const addAttrFunc = (arr, fn) => arr.map(val => Object.assign({}, val, fn));
/**
 * @param 说明函数类型,参数类型是函数时(执行该函数),反之返回该参数
 * @param {any} arg 
 * */ 
const tellTypeFunc = arg => typeof arg === "function" ? arg() : arg;
/**
 * @param 过滤数组==>除去数组中指定的某个数值，并返回一个新的数组
 * @param {Number[]} arr 目标数组
 * @param {Number} num 需要过滤的数值
 * */ 
const arrFilter = (arr, num) => arr.filter(val => val != num);

/**
 * @param 获取对象数组中，指定的某个属性值所对应的某个对象
 * @param {Array} list 目标数组
 * @param {} obj 目标对象
 * */ 
const getSoleData = (list, obj) => list.filter(val => {
    for (let item in obj) {
        if (val[item] == obj[item]) return val;
    }
})

/**
 * 
 * */ 



// compose 组合

export {sum, addAttrFunc, tellTypeFunc, arrFilter, getSoleData};