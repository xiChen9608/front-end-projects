import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/Dashboard.vue'),
    children:[
      {
        path: '',
        name: 'Homepage',
        meta: {title: "系统首页"},
        component: () => import(/* webpackChunkName: "about" */ '../views/homePage/HomePage.vue'),
      },
      {
        path: 'basistable',
        name: 'BasisTable',
        meta: {title: "基础表格"},
        component: () => import(/* webpackChunkName: "about" */ '../views/basisTable/BasisTable.vue'),
      },
      {
        path: 'message',
        name: 'Message',
        meta: {title: "消息"},
        component: () => import(/* webpackChunkName: "about" */ '../views/message/Message.vue'),
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
