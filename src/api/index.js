// import { method } from 'lodash'
import { result } from 'lodash'
import ajax from './ajax'
import mockAjax from './mockAjax'
//首页三级分类
// http://39.98.123.211/api/product/getBaseCategoryList / GET请求
export function reqCategoryList(){
//    return ajax.get('/product/getBaseCategoryList')
//    return ajax('/product/getBaseCategoryList')    //发不带参数的GET请求
    return ajax({
        url:'/product/getBaseCategoryList',
//      method:'GET'
})
}
// export function reqBannerList(){
//     return ajax({
//         url:'/cms/banner'
//     })
// }
export function reqFloorsList(){
    return mockAjax({
        url:'/floors'
    })
}
export function reqBannerList(){
    return mockAjax({
        url:'/banner'
    })
}


export const reqSearch=(searchParams)=>ajax.post('/list',searchParams)

// export function reqSearch(searchParams){
//     return  ajax({
//         method:'POST',
//         url:'/list'
//     })
// }
export const reqDetailInfo=(skuId)=>{
    return ajax({
        url:`/item/${ skuId }`
    })
}
//添加购物车，修改购物车的商品数量
export const reqAddOrUpdateCart=(skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:'post'
    })
}

export const reqShopCart=()=>{
    return ajax({
        url:'/cart/cartList'
        // method:'get'
    })
}
///api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCartChecked=(skuId,isChecked)=>{
    return ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}
//删除购物车数据
///api/cart/deleteCart/{skuId}
export const reqDeleteCart=(skuId)=>{
    return ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete'
    })
}
//获取验证码
export const reqGetCode=(phone)=>{
    return ajax({
        url:`/user/passport/sendCode/${phone}`
    })
}
//用户注册
///api/user/passport/register
export const reqUserRegister=(userInfo)=>{
    return ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}
export const reqUserLogin=(userInfo)=>{
    return ajax({
        url:'/user/passport/login',
        method:'post',
        data:userInfo
    })
}
export const reqUserToken=()=>{
    return ajax({
        url:'/user/passport/auth/getUserInfo'
    })
}
////api/order/auth/trade
//获取交易页面信息/api/order/auth/trade
export const reqTradeInfo=()=>{
 return ajax({
     url:'/order/auth/trade'
 })
}
//获取地址信息
export const reqUserAddress=()=>{
    return ajax({
        url:'user/userAddress/auth/findUserAddressList'
    })
   }