import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/loginVerifyCode',
    name: 'loginVerifyCode',
    component: () => import('@/views/login/loginVerifyCode.vue')
  },
  {
    path: '/forgetPwd',
    name: 'forgetPwd',
    component: () => import('@/views/login/pwd/forgetPwd.vue')
  },
  {
    path: '/resetPwd',
    name: 'resetPwd',
    component: () => import('@/views/login/pwd/resetPwd.vue')
  }

]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    sessionStorage.getItem('token') ? next() : next({ path: '/login' })
  }
})

export default router
