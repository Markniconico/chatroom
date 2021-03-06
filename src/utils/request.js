import axios from "axios";
import { Notify } from "vant";
import store from "@/store/index.js";
import { setToken } from "@/utils/auth";
import router from "@/router/index";

const service = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { token } = store.state.user;

    config.headers["Authorization"] = token ? `Bearer ${token}` : "";
    // config.xsrfCookieName = "csrfToken";
    config.xsrfHeaderName = "X-CSRF-TOKEN";
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data,
      { code, message } = res;
    if (code == 200) {
      return res;
    } else if (code == 401) {
      Notify({
        type: "danger",
        message: message,
      });
      store.dispatch("user/resetToken");
      router.push("/login");
      return Promise.reject(new Error(message || "Error"));
      // 返回主页
    } else {
      Notify({
        type: "danger",
        message: message,
      });
      return Promise.reject(new Error(message || "Error"));
    }
  },
  (error) => {
    Notify({
      type: "danger",
      message: error.message,
    });
    return Promise.reject(error);
  },
);

export default service;
