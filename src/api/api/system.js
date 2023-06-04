import request from '../request'

export function userAddApi (data) {
  return request({
    url: `api/user/add`,
    method: 'post',
    data
  })
}

export function udepartmentTreeApi (data) {
  return request({
    url: `api/department/ucenter/udepartment/tree`,
    method: 'post',
    data
  })
}
