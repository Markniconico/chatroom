import axios from 'axios'
import { Notify } from 'vant'
import store from '@/store/index.js'


const service = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    config.xsrfCookieName = 'CSRF-TOKEN'
    config.xsrfHeaderName = 'X-CSRF-TOKEN'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    Notify({ type: 'danger', message: error.message })
    return Promise.reject(error)
  }
)

export default service