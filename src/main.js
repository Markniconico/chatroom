import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index";
import plugins from "./plugins/index";
import "normalize.css";
import "@styles/global.css";

const app = createApp(App);

app
  .use(plugins)
  .use(store)
  .use(router)
  .mount("#app");
