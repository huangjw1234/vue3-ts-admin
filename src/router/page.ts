import { router } from './type'
import { RouteRecordRaw } from 'vue-router'

const page: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/view/login/login.vue'),
  },
]

export { page }
