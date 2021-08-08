import { loginApi, logOutApi, verifyApi } from "@api/user.js";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { Notify } from "vant";

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userinfo: {
      role: 1,
      username: "",
    },
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserinfo(state, userinfo) {
      state.userinfo = userinfo;
    },
  },
  actions: {
    // 用户登录
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data)
          .then(async (res) => {
            commit("setToken", res.data);
            setToken(res.data);
            Notify({
              type: "success",
              message: "登录成功",
            });
            resolve();
          })
          .catch((err) => reject(err));
      });
    },

    verify({ commit }, data) {
      return new Promise((resolve, reject) => {
        verifyApi(data)
          .then((res) => {
            commit("setUserinfo", res.data);
            resolve();
          })
          .catch((err) => reject(err));
      });
    },

    // 用户退出
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        logOutApi()
          .then(() => {
            Notify({
              type: "success",
              message: "退出成功",
            });
            commit("setToken", "");
            commit("setUserinfo", {
              role: 1,
              username: "",
            });
            removeToken();
            resolve();
          })
          .catch((err) => reject(err));
      });
    },

    resetToken({ commit }) {
      return new Promise((resolve) => {
        commit("setToken", "");
        removeToken();
        resolve();
      });
    },
  },
};
