<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './component/Header'
import Footer from './component/Footer'
// import {getBaseCategoryList} from './api'

export default {
  name: 'App',
   mounted(){
  //   getBaseCategoryList().then((result)=>{
  //     console.log(result)
  //   })
      this.$store.dispatch('getCategoryList')
      this.$store.dispatch('getBannerList')
      this.$store.dispatch('getFloorsList')

      
  },
  components:{
      Header,
      Footer 
  } 
}
</script>

<style lang="less" scoped>

</style>

