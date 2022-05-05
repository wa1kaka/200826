// 管理首页的vuex
import {reqCategoryList,reqBannerList,reqFloorsList} from '../../api'
export default({
    state:{
        categoryList:[],
        bannerList:[],
        floors:[]
    },
    mutations:{
        RESEVE_CATEGORY_LIST(state,categoryList){
            state.categoryList=categoryList.splice(0,15)
        },
        RESEVE_REQBANNER_LIST(state,bannerList){
            state.bannerList=bannerList
        },
        RESEVE_FLOORS_LIST(state,floors){
            state.floors=floors
        }
    },
    actions:{
        async getCategoryList({commit}){
          const result=  await reqCategoryList()
          if(result.code===200){
              const categoryList=result.data 
              commit('RESEVE_CATEGORY_LIST',categoryList)
          }
        },
        async getBannerList({commit}){
            const result=await reqBannerList()
            if(result.code===200){
                const BannerList=result.data
                commit('RESEVE_REQBANNER_LIST',BannerList)
            }
        },
        async getFloorsList({commit}){
            const result=await reqFloorsList()
            if(result.code===200){
                const reqFloorsList=result.data
                commit('RESEVE_FLOORS_LIST',reqFloorsList)
            }
        }
    },
    getters:{},
   
})