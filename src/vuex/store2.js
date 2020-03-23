import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import user from './modules/user'
/*
* state 单一状态树
* getters(可以认为是store的计算属性)
* mutations (提交mutations)修改状态数 mutation必须是同步函数/同步事务
* actions  action提交mutation,不直接变更状态 可包含任意异步操作
*/
const store = new Vuex.Store({
    modules:{
        user
    }
})

export default store