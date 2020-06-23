// 配置路由相关信息

// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 正常加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')

// 安装插件
Vue.use(VueRouter)

// 创建router对象
const routes = [
    // 默认
    {
        path: '/',
        redirect: '/home'
    },
    // 首页
    {
        path: '/home',
        component: Home,
        children: [
            // 默认
            {
                path: '/',
                redirect: 'news'
            },
            // 新闻
            {
                path: 'news',
                component: HomeNews
            },
            // 消息
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    // 关于
    {
        path: '/about',
        component: About
    },
    // 用户
    {
        path: '/user/:id',
        component: User
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的影射关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 将router对象传入到vue实例
export default router
