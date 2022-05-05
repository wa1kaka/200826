import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import TypeNav from './component/TypeNav'
import './mock/mockServe' 
import './plugins/swiper'

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false


new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
/* eslint-disable no-unused-vars */