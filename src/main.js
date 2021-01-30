import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible/index.js'

import { Button } from 'vant'

const app = createApp(App)

app.use(Button)

app.use(store).use(router).mount('#app')
