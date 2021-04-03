import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import plugins from './plugins/index'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'


const app = createApp(App)

var socket = SocketIO("/socket.io", {
  extraHeaders: {
    Authorization: "Bearer authorization_token_here"
  }
});


const vueSocketIo = new VueSocketIO({
    debug: true,
    connection: socket,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
})

vueSocketIo.io.on('init', (data) => {
 
    console.log(data); //这是后端推送过来的数据

    this.setState({
        news: data
    });
})

app.config.globalProperties.socket = vueSocketIo


vueSocketIo.io.on('connect', () => {
    console.log('socket connect from main.js')
    console.log('socket connect from main.js')
    store.commit('socket_newIsSuccessConnect', true)
})



app.use(plugins).use(store).use(router).mount('#app')