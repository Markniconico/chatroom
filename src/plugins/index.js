import { Button, Empty, Form, Field, Tabbar, TabbarItem, List, NavBar, Icon, PullRefresh, Image as VanImage, Lazyload } from 'vant'


const plugins = [Button, Empty, Form, Field, Tabbar, TabbarItem, List, NavBar, Icon, PullRefresh, VanImage, Lazyload]

export default function (app) {
  for (const plugin of plugins) {
    app.use(plugin)
  }
}