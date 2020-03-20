import Vue from 'vue'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITINALIZE_DATA = 'INITINALIZE_DATA'
export default {
    [ADD_ITEMNUM](state,num) {
        state.itemNum += num
    },
    [REMBER_ANSWER](state, id) {
        state.answerid.push(id)
    },
    [REMBER_TIME](state) {
        state.allTime++
    },
    [INITINALIZE_DATA](state) {
        // state.itemNum = 1;
        // state.allTime = 0;
        // state.answerid = [];
        Vue.set(state, 'itemNum',1);
        Vue.set(state, 'allTime',0);
        Vue.set(state, 'answerid',[]);
        console.log(state);
    }
}