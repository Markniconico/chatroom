import request from '@/utils/request.js'
import axios from 'axios'

/* export function login (data) {
  return request({
    url: 'http://182.92.81.247/api/login',
    method: 'POST',
    data
  })
} */


// 测试用的
export function login (data) {
/*   return axios.post('http://182.92.81.247/api/login', { data }, {
    withCredentials: true,
    xsrfCookieName: "",
    xsrfHeaderName: ""
  }) */
  /* myaxios.defaults.xsrfCookieName = 'CSRF-TOKEN'
  myaxios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN' */
  const myaxios = axios
  myaxios.defaults.xsrfCookieName = ''
  myaxios.defaults.xsrfHeaderName = ''
  return myaxios({
    method: 'post',
    url:'/login',
    data,
    xsrfCookieName: '',
    withCredentials: true,
     headers: {
      ['Authorization']: 'Bearer token',
      ['x-csrf-token']: 'yH1xmgSKb5IiYszx7ZNv-DsW'
    } 
  })
}
