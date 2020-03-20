import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
/*
* state 单一状态树
* getters(可以认为是store的计算属性)
* mutations (提交mutations)修改状态数 mutation必须是同步函数/同步事务
* actions  action提交mutation,不直接变更状态 可包含任意异步操作
*/
const store = new Vuex.Store({
    // 状态
    state:{
        num:0,
        todo:[{
            id:1,text:'...',done:true
        },{
            id:2,text:'...',done:false
        }]
    },
    getters:{
        doneTodos: state => {
            return state.todo.filter(todo => todo.done)
        }
    },
    // 修改状态 store.commit('increment') 触发对应的mutatios 更新/修改状态state
    mutations: {
        increment (state) {
            /* setTimeout(() => {
                console.log('setTimeout');
                state.num++
            }, 1000) */
            console.log(state);
            state.num++
        },
        reduce (state) {
            console.log(state)
            state.num--
        }
    },
    actions:{
        /* increment () {
            context.commit('increment')
        } */
        // increment ({ commit }) {
        //     commit('increment')
        // }
    }
})

export default store