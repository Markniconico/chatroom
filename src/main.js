import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@styles/global.scss'
import 'amfe-flexible/index.js'

import { Button, Empty, Form, Field, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)

app.use(Button).use(Empty).use(Form).use(Field).use(Tabbar).use(TabbarItem)

app.use(store).use(router).mount('#app')
