/**
 * 请求拦截器相关配置项
 */
/* 列表中的接口调用时不会弹窗loading */
export const loadingWhiteList = []

/* 不需要token就能访问的接口列表 */
export const noToken = [
  '/api/auth/login'
]

/* code值及对应的msg信息 */
export const codeMsg = {
  'otherError': {
    code: 1,
    msg: '访问出错'
  },
  'tokenExpire': {
    code: 1000,
    msg: '登录过期，请重新登录'
  }
}

/* loading文本 */
export const loadingText = '加载中'

/* 超时等报错信息 */
export const errorMsg = '出错了，请稍后再试'

/* token出错时的跳转路径 */
export const tokenErrorPath = '/login'
