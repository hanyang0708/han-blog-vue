import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/essay',
        meta: {
            needLogin: false
        }
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
                component: () => import('@/views/essay/List'),
                meta: {
                    needLogin: false
                }
            },
            {
                path: '/essay/info:id',
                name: 'essayInfo',
                component: () => import('@/views/essay/Info'),
                props: true,
                meta: {
                    needLogin: false
                }
            },
        ]
    },
    {
        path: '/createEssay',
        name: '创作文章',
        component: () => import('@/views/CreateEssay'),
        meta: {
            needLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/views/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) =>{
    let token = store.getters.getToken;
    if(!token && to.meta.needLogin === true){
        next('/login');
    }else{
        next()
    }
})

export default router