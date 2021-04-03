import axios from 'axios'
import {
  Notify
} from 'vant'
import store from '@/store/index.js'
import {
  removeToken
} from '@/utils/auth'


const service = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const {
      token
    } = store.state.user

    config.headers['Authorization'] = token ? `Bearer ${store.state.user.token}` : ''
    config.xsrfCookieName = 'csrfToken'
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
    if (res.status !== 200) {
      Notify({
        type: 'danger',
        message: res.message
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Notify({
      type: 'danger',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service