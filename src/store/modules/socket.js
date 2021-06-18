export default {
    namespaced: true,
    state: {
        isSuccessConnect: false
    },
    getters: {
        getIsSuccessConnect: state => {
            return state.isSuccessConnect
        }
    },
    mutations: {
        newIsSuccessConnect(state, value) {
            state.isSuccessConnect = value
        }
    },
    actions: {

    }
}