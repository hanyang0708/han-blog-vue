import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/essay',
    },
    {
        path: '/essay',
        name: '文章',
        component: Home,
        redirect: '/essay/list',
        children: [
            {
                path: '/essay/list',
                name: '文章列表',
                component: () => import('@/views/essay/List')
            },
            {
                path: '/essay/create',
                name: '创作文章',
                component: () => import('@/views/essay/Create')
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: ()=> import('@/views/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router