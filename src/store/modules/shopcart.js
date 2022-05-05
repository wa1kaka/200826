import { reqAddOrUpdateCart,reqShopCart,reqUpdateCartChecked,reqDeleteCart } from "@/api";
import { update } from "lodash";
export default{
    state:{
        shopCartList:[],
        },
    mutations:{
        SHOPCART(state,shopCartList){
           state.shopCartList=shopCartList
        },
       
    },
    actions:{
        async addOrUpdateCart({commit},{skuId,skuNum}){
            const result=   await reqAddOrUpdateCart(skuId,skuNum)
            if(result.code===200){
             return 'ok'
            }else{
                return Promise.reject(new Error('failed'))
            }
          },
          async getShopCart({commit}){
            const result=await reqShopCart()
            if(result.code===200){
                const shopCartList=result.data[0].cartInfoList
                commit('SHOPCART',shopCartList)
                console.log(shopCartList)
            }
          },
          async getUpdateCartChecked({commit},{skuId,isChecked}){
              const result=await reqUpdateCartChecked(skuId,isChecked)
              if(result.code===200){
                return 'ok'
             }else{
                return Promise.reject(new Error('failed'))
                }
              
          },
          async getDeleteCart({commit},skuId){
              const result=await reqDeleteCart(skuId)
              if(result.code===200){
                  return 'ok'
              }else{
                  return Promise.reject(new Error('failed'))
              }
          },
          async updateCartCheckedAll({commit,dispatch,state},isChecked){
              let promises=[]
              state.shopCartList.forEach(item => {
                  if(item.isChecked===isChecked) return
                  let promise=dispatch('getUpdateCartChecked',{skuId:item.skuId,isChecked})
                  promises.push(promise)
                })
                return Promise.all(promises)
          },
          async deleteCartAll({commit,dispatch,state}){
            let promises=[]
            state.shopCartList.forEach(item=>{
                if(!item.isChecked) return
                let promise=dispatch('getDeleteCart',item.skuId)
                promises.push(promise)
            })
            return Promise.all(promises)
          }
    },
    getters:{
     
    }
}