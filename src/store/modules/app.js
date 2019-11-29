// 全局业务状态管理模块
const state = {
    slider: {
        mode: "slider",
        list: []
    }
}

// 同步 ==>用来给state数据模型赋值 (只修改数据) (方法为纯函数,异步请求完成后改变state中的数据模型在此处进行)
const mutations = {
    
}


// 异步 ==》通过后台接口请求数据 (只获取数据)
const actions = {
    // getData ({commit}, data) {
    //     console.log(data);
    // }
}

export default {
    namespace: true,
    state,
    mutations,
    actions
}