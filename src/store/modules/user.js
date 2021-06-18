import { loginApi, logOutApi } from '@api/user.js'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    // 用户登录
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data).then(res => {
          commit('setToken', res.data)
          setToken(res.data)
          resolve()
        }).catch(err => reject(err))
      })
    },

    // 用户退出
    logOut ({ commit }) {
      console.log(document.cookie)
      return new Promise((resolve, reject) => {
        logOutApi().then(() => {
          commit('setToken','')
          removeToken()
          resolve()
        }).catch(err => reject(err))
      })
    }
  }
}