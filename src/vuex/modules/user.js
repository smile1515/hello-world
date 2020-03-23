import api from '../../axios/api'
import * as types from '../types.js'

const state = {
    loginStatus:JSON.parse(localStorage.getItem('loginStatus')) || false,
    userInfo:JSON.parse(localStorage.getItem('userInfo')) || {},
    userData: []
}

const actions = {
    setUserInfo({ commit }, res) {
        localStorage.setItem('userInfo',JSON.stringify(res))
        localStorage.setItem('loginStatus',true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },
    setSignOut({commit}) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        commit(types.SET_LOGIN_STATUS,false)
        commit(types.SET_USER.INFO, {})
    },
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS,true)
        api.UserInfo(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo
}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },
    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },
    [types.SET_USER_DATA](state, res) {
        state.userData = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}