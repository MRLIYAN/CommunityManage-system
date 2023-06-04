import request from '../request'

// 非机动车事件统计
export function verifyCodeApi (data) {
  return request({
    url: `api/verifyCode`,
    responseType: 'arraybuffer', // 这是重点
    method: 'get',
    data
  })
}

export function loginApi (data) {
  return request({
    url: 'api/loginWithCode',
    method: 'POST',
    data
  })
}
