import {reqTradeInfo,reqUserAddress} from '@/api'
export default{
    state:{
        tradeInfo:{},
        userAddress:{}
    },
    mutations:{
        TRADEINFO(state,tradeInfo){
            state.tradeInfo=tradeInfo
        },
        USERADDRESS(state,userAddress){
            state.userAddress=userAddress
        },
    },
    actions:{
        async getTradeInfo({commit}){
            const result=await reqTradeInfo()
            if(result.code===200){
                commit('TRADEINFO',result.data)
            }
        },
        async getUserAddress({commit}){
            const result=await reqUserAddress()
            if(result.code===200){
                commit('USERADDRESS',result.data)
            }
        },
    },
    getters:{
        detailArrayList(state){
            return state.tradeInfo.detailArrayList||[]
        },
        userAddress(state){
            return state.userAddress||[]
        }
    }
}