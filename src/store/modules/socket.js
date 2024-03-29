import { Notify } from "vant";

import io from "socket.io-client";
import cookie from "cookie_js";

export default {
  namespaced: true,
  state: {
    socket: null,
  },
  getters: {
    getSocket(state) {
      return state.socket;
    },
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
          socket.emit("addRooms");

          resolve();
        });
        socket.on("disconnect", () => {
          console.log("自动重连ing");
          socket.connect();
        });
      });
    },
    createChat({ commit, state }, { chat_user_id }) {
      return new Promise((resolve, reject) => {
        state.socket.emit(
          "createChat",
          { chat_user_id },
          ({ code, message, data }) => {
            if (code === 200) {
              resolve(data);
            } else {
              reject();
            }
          },
        );
      });
    },
    sendMessage({ commit, state }, { chat_id, message }) {
      return new Promise((resolve, reject) => {
        state.socket.emit(
          "sendMessage",
          { chat_id, message },
          ({ code, message }) => {
            if (code === 200) {
              resolve();
            } else {
              reject();
            }
          },
        );
      });
    },
  },
};
