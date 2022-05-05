import {reqSearch} from '../../api'
export default{
    state:{
        Search:[]
    },
    mutations:{
        RESEVE_SEARCH(state,Search){
            state.Search=Search
        }
    },
    
    actions:{
        async getSearch({commit},searchParams){
            const result=await reqSearch(searchParams)
            if(result.code===200){
                const Search=result.data
                commit('RESEVE_SEARCH',Search)
            }
        }
    },
    getters:{
        goodsList(state){
            return state.Search.goodsList || []
            
        },
        //品牌列表
        trademarkList(state){
            return state.Search.trademarkList || []
            
        },
        
        attrsList(state){
            return state.Search.attrsList || []
            
        }
    }

}