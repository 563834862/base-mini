
import fly from './intercept'
import config from '../../config/index'

//用户中心首次登入认证(code)
export const auth =  (data = {}) =>{
    data.timestamp = new Date().getTime()
   
    let object = {data}
    return fly.post(`/auth`, {object})   
}


//对微信小程序用户加密数据的解密wxBizDataCrypt
export const wxBizDataCrypt =  (data = {}) =>{
    data.timestamp = new Date().getTime()
    data.appId = config.app
    let object = {
        "requestType": "wxBizDataCrypt",
        data
    }
    return fly.post(`/ServiceAPI`, {object})   
}

//更新SessionKey
export const updateSessionKey =  (data = {}) =>{
    data.timestamp = new Date().getTime()
    data.appId = config.app
    let object = {
        "requestType": "updateSessionKey",
        data
    }
    return fly.post(`/ServiceAPI`, {object})   
}