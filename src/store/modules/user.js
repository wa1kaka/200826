import { getUserTempId, getToken, setToken, removeToken } from '../../utils/userabout'
import { reqUserRegister, reqGetCode, reqUserLogin, reqUserToken } from '@/api'

const state = {
    userTempId: getUserTempId(),
    code: '',
    token: getToken(),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    RESETUSERINFO(state) {
        state.userInfo = {},
            state.token = ''
    }
}
const actions = {
    async GetCode({ commit }, phone) {
        const result = await reqGetCode(phone)
        if (result.code === 200) {
            commit('GETCODE', result.data)
            return 'ok'

        } else {
            return Promise.reject('failed')
        }
    },
    async getUserRegister({ commit }, userInfo) {
        const result = await reqUserRegister(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject('failed')
        }
    },
    async getUserLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo)
        if (result.code === 200) {
            commit('USERLOGIN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getUserToken({ commit }) {
        const result = await reqUserToken()
        console.log(result)
        if (result.code === 200) {
            commit('USERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async resetUserInfo({ commit }) {
        removeToken()
        commit('RESETUSERINFO')
    }

}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}