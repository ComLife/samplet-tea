import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/user/User');
const Adver = () => import('../views/adver/Adver');
const Detail = () => import('../views/detail/Detail');

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/user',
    component: Profile
  },
  {
    path: '/adver',
    component: Adver
  },
  {
    path: '/detail',
    component: Detail
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'hash',
  routes
})

// 4.导出
export default router
