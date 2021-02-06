import { loginApi, logOutApi } from '@api/user.js'

const token = window.localStorage.getItem('token')

export default {
  namespaced: true,
  state: {
    token: token || ''
  },
  getters: {
  },
  mutations: {
    login (state, token) {
      state.token = token
    },
    logOut (state) {
      state.token = ''
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data).then(res => {
          window.localStorage.setItem('token', res.data)
          commit('login', res.data)
          resolve()
        }).catch(err => reject(err))
      })
    },
    logOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logOutApi().then(() => {
          window.localStorage.removeItem('token')
          commit('logOut')
          resolve()
        }).catch(err => reject(err))
      })
    }
  }
}