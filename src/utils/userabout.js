import { v4 as uuidv4 } from 'uuid';

//让用户获取到唯一的标识
export  function getUserTempId(){
    //这个函数
    let userTempId=localStorage.getItem('USERTEMPID_KEY')
    if(!userTempId){
    userTempId=uuidv4();
    localStorage.setItem('USERTEMPID_KEY',userTempId)
  
    }
    return userTempId
}