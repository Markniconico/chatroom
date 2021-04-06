import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index";
import plugins from "./plugins/index";
import io from "socket.io-client";
import cookie from "cookie_js";

const app = createApp(App);

// namespace
const socket = io("/", {
    path: "/socket.io", // 后端socket地址
    extraHeaders: {
        Authorization: `Bearer ${cookie.get("Admin-Token")}`,
        "x-csrf-token": cookie.get("csrfToken"),
    },
});

socket.on("connect", () => {
    console.log(socket.id);
});

app.use(plugins)
    .use(store)
    .use(router)
    .mount("#app");
