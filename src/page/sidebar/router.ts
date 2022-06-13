import {
  Avatar,
  Setting,
  GoodsFilled,
  User,
  Discount,
  Menu,
  Briefcase,
  Goods,
  Wallet,
  DocumentCopy,
  ShoppingBag,
  Reading,
  Notebook,
} from '@element-plus/icons-vue'

interface List {
  path: string
  name: string
  icon: any
  children: Array<List>
}

const list: Array<List> = [
  {
    path: '/system',
    name: '系统管理',
    icon: Setting,
    children: [
      {
        path: '/system/user',
        name: '用户管理',
        icon: User,
        children: [],
      },
      {
        path: '/system/department',
        name: '部门管理',
        icon: Briefcase,
        children: [],
      },
      {
        path: '/system/role',
        name: '角色管理',
        icon: Avatar,
        children: [],
      },
      {
        path: '/system/menu',
        name: '菜单管理',
        icon: Menu,
        children: [],
      },
    ],
  },
  {
    path: '/orders',
    name: '订单管理',
    icon: DocumentCopy,
    children: [
      {
        path: '/orders/orders',
        name: '订单管理',
        icon: DocumentCopy,
        children: [],
      },
      {
        path: '/orders/me-orders',
        name: '我的订单',
        icon: User,
        children: [],
      },
    ],
  },
  {
    path: '/shopping',
    name: '商品管理',
    icon: Goods,
    children: [
      {
        path: '/shopping/shopping',
        name: '商品管理',
        icon: GoodsFilled,
        children: [],
      },
      {
        path: '/shopping/shopping-type',
        name: '商品类别',
        icon: ShoppingBag,
        children: [],
      },
    ],
  },
  {
    path: '/essay',
    name: '文章管理',
    icon: Reading,
    children: [
      {
        path: '/essay/essay',
        name: '文章管理',
        icon: Notebook,
        children: [],
      },
    ],
  },
  {
    path: '/problem',
    name: '问题管理',
    icon: Discount,
    children: [
      {
        path: '/problem/problem',
        name: '问题管理',
        icon: Wallet,
        children: [],
      },
    ],
  },
]

export default list
