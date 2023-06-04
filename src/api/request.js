import axios from 'axios'
// import utils from '@/utils/index.js'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
  timeout: 1000 * 5,
  withCredentials: true
  // headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  // }
})

// loading白名单 (名单内不出现loading加载效果)
// const whiteList = [
//     ''
// ]

// 请求拦截
service.interceptors.request.use(
  config => {
    config.headers['token'] = sessionStorage.getItem('token')
    return config
  },
  error => {
    // 处理请求错误
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(

)

export default service
