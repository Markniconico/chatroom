export default {
  state: {
    token: 'my value'
  },
  getters: {
    value: state => {
      return state.value
    }
  },
  mutations: {
    updateValue (state, payload) {
      state.value = payload
    }
  },
  actions: {
    login ({ commit }, payload) {

    },
    updateValue ({ commit }, payload) {
      commit('updateValue', payload)
    }
  }
}