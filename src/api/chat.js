import request from '@/utils/request.js'

export function getChatListApi() {
    return request({
        url: "/chat/getChatList",
        methods: "GET",
    })
}
export function getUserListApi() {
    return request({
        url: "/chat/getUserList",
        methods: "GET",
    })
}