import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '/@/page/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '登录页',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/view/login/login.vue'),
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('/@/view/home/index.vue'),
      },
    ],
  },
  {
    path: '/system',
    component: Layout,
    children: [
      {
        path: 'user',
        name: '用户管理',
        component: () => import('/@/view/user/index.vue'),
      },
      {
        path: 'department',
        name: '部门管理',
        component: () => import('/@/view/department/index.vue'),
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('/@/view/role/index.vue'),
      },
      {
        path: 'menu',
        name: '菜单管理',
        component: () => import('/@/view/menu/index.vue'),
      },
    ],
  },
  {
    path: '/orders',
    component: Layout,
    children: [
      {
        path: 'orders',
        name: '订单管理',
        component: () => import('/@/view/orders/index.vue'),
      },
      {
        path: 'me-orders',
        name: '我的订单',
        component: () => import('/@/view/me-orders/index.vue'),
      },
    ],
  },
  {
    path: '/shopping',
    component: Layout,
    children: [
      {
        path: 'shopping',
        name: '商品管理',
        component: () => import('/@/view/shopping/index.vue'),
      },
      {
        path: 'shopping-type',
        name: '商品类别',
        component: () => import('/@/view/type/index.vue'),
      },
    ],
  },
  {
    path: '/essay',
    component: Layout,
    children: [
      {
        path: 'essay',
        name: '文章管理',
        component: () => import('/@/view/essay/index.vue'),
      },
    ],
  },
  {
    path: '/problem',
    component: Layout,
    children: [
      {
        path: 'problem',
        name: '问题管理',
        component: () => import('/@/view/problem/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
