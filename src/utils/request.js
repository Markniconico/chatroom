import axios from 'axios'
import { Notify } from 'vant'
import store from '@/store/index.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

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