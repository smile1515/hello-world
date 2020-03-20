export default {
    addNum({commit,state},id) {
        // 提交mutations
        commit('REMBER_ANSWER',id);
        if(state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM',1)
        }
    },
    initializeData({commit}){
        console.log('INITINALIZE_DATA')
        commit('INITINALIZE_DATA')
    }
}