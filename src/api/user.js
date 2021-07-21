import request from "@/utils/request.js";

export function loginApi(data) {
  return request({
    url: "/login",
    method: "POST",
    data,
  });
}

export function verifyApi() {
  return request({
    url: "/verify",
    method: "POST",
  });
}

export function logOutApi() {
  return request({
    url: "/logout",
    method: "POST",
  });
}
