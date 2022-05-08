import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
// import Login from '../pages/Login'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import addcartsuccess from '../pages/AddCartSuccess'
import Trade from '../pages/Trade'

import shopCart from '../pages/ShopCart'
import store from '@/store'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    mode: 'hash',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/login',
            component: Login,
            meta: { isHideFooter: true }
        },
        {
            path: '/trade',
            component: Trade,
            
        },
        {
            path: '/register',
            component: Register,
            meta: { isHideFooter: true }
        },
        {
            path: '/shopcart',
            component: shopCart,
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search'
        },
        {
            path: '/',
            component: Home

        },
        {
            path: '/detail/:skuId',
            component: Detail

        },
        {
            path: '/addcartsuccess',
            component: addcartsuccess

        },
    ],
})
router.beforeEach(async (to, from, next) => {
    //  //全局前置导航首位
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    console.log(token)
    if (token) {
        // //         //代表登陆了或者之前登陆了
        if (to.path === '/login') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserToken')
                    next()
                } catch (error) {
                    alert('用户token过期')
                    await store.dispatch('resetUserInfo')
                    next('/login')
                }
            }
        }
    } else {
        next()
    }
})

export default router
