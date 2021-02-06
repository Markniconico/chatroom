import request from '@/utils/request.js'
import axios from 'axios'

export function loginApi (data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

export function logOutApi () {
  return request({
    url: '/logout',
    method: 'POST'
  })
}



