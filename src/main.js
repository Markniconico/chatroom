import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'

import { Button, Empty, Form, Field, Tabbar, TabbarItem, List, NavBar, Icon, PullRefresh, Image as VanImage, Lazyload } from 'vant'

const app = createApp(App)

app.use(Button).use(Empty).use(Form).use(Field).use(Tabbar).use(TabbarItem).use(List).use(NavBar).use(Icon).use(PullRefresh).use(VanImage).use(Lazyload)

app.use(store).use(router).mount('#app')
