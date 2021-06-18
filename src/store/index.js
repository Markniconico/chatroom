import { createStore } from 'vuex'
import user from './modules/user'
import socket from './modules/socket'

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    socket
  }
})
