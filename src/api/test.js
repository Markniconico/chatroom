import request from '@/utils/request.js'

export function test (query) {
  return request({
    url: '/test',
    method: 'get',
    params: query
  })
}