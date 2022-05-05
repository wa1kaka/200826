import axios  from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'

// 对axios进行二次包装   http://39.98.123.211/基础路径
// 1. 配置通用的基础路径和超时
// 2. 显示请求进度条
// 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
// 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
 const servece=axios.create({
     baseURL:'/mock',//基础路径
     timeout:20000,                     //超时时间
 })
 //添加请求拦截器
servece.interceptors.request.use((config)=>{
    // 2. 显示请求进度条
    nprogress.start()   
    return config
})
//添加相应拦截器
servece.interceptors.response.use(  
    (response)=>{
          // 2. 隐藏请求进度条  
        nprogress.done()   
        return response.data
    },
     (error)=>{
             // 2. 隐藏请求进度条
        nprogress.done()   
        alert(error.message ||'未知的请求错误')
        return Promise.reject(error)
}
)


 //向外暴露servece
 export default servece

