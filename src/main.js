import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import plugins from './plugins/index'


const app = createApp(App)

app.use(plugins).use(store).use(router).mount('#app')
