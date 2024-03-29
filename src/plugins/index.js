import {
  Button,
  Empty,
  Form,
  Field,
  Tabbar,
  TabbarItem,
  List,
  NavBar,
  Icon,
  PullRefresh,
  Image as VanImage,
  Lazyload,
  Cell,
  Popover,
  Popup,
  Grid,
  GridItem,
  Uploader,
  IndexBar,
  IndexAnchor,
} from "vant";

const plugins = [
  Button,
  Empty,
  Form,
  Field,
  Tabbar,
  TabbarItem,
  List,
  NavBar,
  Icon,
  PullRefresh,
  VanImage,
  Lazyload,
  Cell,
  Popover,
  Popup,
  Grid,
  GridItem,
  Uploader,
  IndexBar,
  IndexAnchor,
];

export default function(app) {
  for (const plugin of plugins) {
    app.use(plugin);
  }
}
