import { loginApi, logOutApi } from "@api/user.js";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { Notify } from "vant";

export default {
  namespaced: true,
  state: {
    token: getToken(),
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // 用户登录
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data)
          .then((res) => {
            Notify({
              type: "success",
              message: "登录成功",
            });
            commit("setToken", res.data);
            setToken(res.data);
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
            removeToken();
            resolve();
          })
          .catch((err) => reject(err));
      });
    },
  },
};
