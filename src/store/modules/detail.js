import { reqDetailInfo } from "@/api";
export default{
    state:{
        skuDetailInfo:{}
    },
    mutations:{
        RECEIVE_SKUDETAILINFO(state,skuDetailInfo){
            state.skuDetailInfo=skuDetailInfo
        }
    },
    actions:{
        async getDetailInfo({commit},skuId){
            const result=await reqDetailInfo(skuId)
            if(result.code===200){
                const detailInfo=result.data
                commit('RECEIVE_SKUDETAILINFO',detailInfo)
                console.log(result)
            }
        }
    },
    getters:{
        categoryView(state){
            return state.skuDetailInfo.categoryView ||{}
        },
        skuInfo(state){
            return state.skuDetailInfo.skuInfo ||{}
        },
        spuSaleAttrList(state){
            return state.skuDetailInfo.spuSaleAttrList||{}
        }
    }
}