import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store/index.js";
import { Notify } from "vant";
/* import NProgress from 'nprogress'
import 'nprogress/nprogress.css' */

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/chat",
    component: Home,
    children: [
      {
        path: "/chat",
        name: "Chat",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/chat/Chat.vue"),
        meta: {
          requiresAuth: true,
          title: "聊天",
          navBar: true,
        },
      },
      {
        path: "/friend",
        name: "friend",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/friend/Friend.vue"),
        meta: {
          requiresAuth: true,
          title: "好友",
          navBar: true,
        },
      },
      {
        path: "/my",
        name: "my",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/my/My.vue"),
        meta: {
          requiresAuth: true,
          title: "我的",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/login/Login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/chatwindow",
    name: "ChatWindow",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/chat-window/ChatWindow.vue"
      ),
    meta: { title: "聊天" },
  },
  {
    path: "/:catchAll(.*)",
    name: "Page404",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/error-page/Page404.vue"),
    meta: { title: "找不到你想去的页面" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // NProgress.start()

  const { token, userinfo } = store.state.user;

  document.title = to.meta.title || "聊天室";

  // 登录页并且已经登录跳转到首页
  if (to.path === "/login") {
    if (token) {
      return next({ path: "/chat", replace: true });
    }
    next();
  } else {
    // 未登录且需要登录的页面
    if (!token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else if (!userinfo.username) {
      await store.dispatch("user/verify");
      await store.dispatch("socket/connect");
      const socket = store.getters["socket/getSocket"];
      if (socket) {
        socket.on("error", ({ code, message }) => {
          if (code === 401) {
            Notify({
              type: "danger",
              message: "socket登录失效",
            });
            store.dispatch("user/resetToken");
            router.push("/login");
          } else if (code === 500) {
            Notify({
              type: "danger",
              message: "socket未知错误",
            });
          }
        });
      }

      next();
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  // NProgress.done()
});

export default router;
