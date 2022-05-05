import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
// import Login from '../pages/Login'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import addcartsuccess from '../pages/AddCartSuccess'
import shopCart from '../pages/ShopCart'
Vue.use(VueRouter)
  
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    mode:'hash',
    scrollBehavior(){
        return{x :0,y: 0}
    },
    routes:[        
        {
            path:'/login',
            component: Login,
            meta:{isHideFooter:true}
        },
        {
            path:'/register',
            component: Register,
            meta:{isHideFooter:true}
        },
        {
            path:'/shopcart',
            component: shopCart,
        },
        {
            path:'/search/:keyword?',
            component: Search,
            name:'search'
        },
        {
            path:'/', 
            component: Home
            
        },
        {
            path:'/detail/:skuId',
            component: Detail
            
        },
        {
            path:'/addcartsuccess',
            component: addcartsuccess
            
        },
    ],
})

