//
//  vuex的核心
//
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import search from './modules/search'
import detail from './modules/detail'
import shopcart from './modules/shopcart'
import user from './modules/user'
import trade from './modules/trade'
 
Vue.use(Vuex)

    export default new Vuex.Store({
        mutations:{},
        actions:{},
        getters:{},
        modules:{
            home,
            search,
            detail,
            shopcart,
            user,
            trade
        }
    })