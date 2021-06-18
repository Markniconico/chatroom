import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store/index.js'
/* import NProgress from 'nprogress'
import 'nprogress/nprogress.css' */

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/chat',
    component: Home,
    children: [
      {
        path: '/chat',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "about" */ '@/views/chat/Chat.vue'),
        meta: {
          requiresAuth: true,
          title: '聊天',
          navBar: true
        }
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import(/* webpackChunkName: "about" */ '@/views/friend/Friend.vue'),
        meta: {
          requiresAuth: true,
          title: '好友',
          navBar: true
        }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "about" */ '@/views/my/My.vue'),
        meta: {
          requiresAuth: true,
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/chatwindow',
    name: 'ChatWindow',
    component: () => import(/* webpackChunkName: "about" */ '@/views/chat-window/ChatWindow.vue'),
    meta: { title: '聊天' }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/error-page/Page404.vue'),
    meta: { title: '找不到你想去的页面' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // NProgress.start()

  const { token } = store.state.user

  document.title = to.meta.title || '聊天室'

  // 登录页并且已经登录跳转到首页
  if (to.path === '/login') {
    if (token) {
      return next({ path: '/chat', replace: true })
    }
    next()
  } else {
    // 未登录且需要登录的页面
    if (to.meta.requiresAuth && !token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  // NProgress.done()
})

export default router
