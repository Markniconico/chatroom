import request from '@/utils/request.js'
import axios from 'axios'

export function login (data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}



