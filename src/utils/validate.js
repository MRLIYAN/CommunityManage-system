// 手机号验证
export function validPhone (rule, value, callback) {
  let reg = /^1[345789]\d{9}$/
  if (!reg.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

// 固定电话号码验证
export function validTel (str) {
  const reg = /^0\d{2,3}-?\d{7,8}$/
  return reg.test(str)
}

// 用户密码验证
export function checkPassword (str) {
  let passwordReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]+$/
  if (str.indexOf(' ') > -1) {
    return '不能包含空格'
  } else if (str.length > 20 || str.length < 6) {
    return '长度必须为6-20位'
  } else if (!passwordReg.test(str)) {
    return '必须包含字母、数字、特殊符号中至少两种'
  } else {
    return false
  }
}

export function validPassword (rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (checkPassword(value)) {
      callback(new Error(checkPassword(value)))
    } else {
      callback()
    }
  }
}
