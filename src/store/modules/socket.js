import { Notify } from "vant";

import io from "socket.io-client";
import cookie from "cookie_js";

export default {
  namespaced: true,
  state: {
    socket: null,
  },
  getters: {
    getSocket() {},
  },
  mutations: {
    setSocket(state, socket) {
      state.socket = socket;
    },
  },
  actions: {
    connect({ commit }) {
      return new Promise((resolve, reject) => {
        const socket = io("/", {
          path: "/socket.io", // 后端socket地址
          extraHeaders: {
            Authorization: `Bearer ${cookie.get("Admin-Token")}`,
            // "x-csrf-token": cookie.get("csrfToken"),
          },
        });

        socket.on("connect", () => {
          commit("setSocket", socket);
          Notify({
            type: "success",
            message: "socket连接成功",
          });
          resolve();
        });
        socket.on("disconnect", () => {
          console.log("自动重连ing");
          socket.connect();
        });
      });
    },
  },
};
