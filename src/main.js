import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index";
import plugins from "./plugins/index";
import io from "socket.io-client"
import cookie from "cookie_js";
import "normalize.css";
import "@styles/global.css"

const app = createApp(App);

// namespace
const socket = io("/test", {
  path: "/socket.io", // 后端socket地址
  extraHeaders: {
    Authorization: `Bearer ${cookie.get("Admin-Token")}`,
    "x-csrf-token": cookie.get("csrfToken"),
  },
});

socket.on("connect", () => {
  console.log(socket.id);
});
socket.emit("my", "test");
socket.on("ok", (payload) => {
  console.log(payload);
});

app
  .use(plugins)
  .use(store)
  .use(router)
  .mount("#app");
