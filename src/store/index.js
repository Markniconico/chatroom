import { createStore } from 'vuex'
import user from './modules/user'
import socket from './modules/socket'
import chat from './modules/chat'

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    socket,
    chat
  }
})
