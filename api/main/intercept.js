import md5 from 'md5'
import config from '../../config/index'
let Fly = require('../../utils/fly')
let fly = new Fly()

   

const SECRET = config.SECRET
    //添加请求拦截器
fly.config.baseURL = config.main_host
fly.interceptors.request.use((request) => {
    let _main_token = wx.getStorageSync('mainToken') || {}
    request.headers["Authorization"] = `Bearer ${_main_token.token}`
    let params = JSON.parse(JSON.stringify(request.body.object.data))
    let key = Object.keys(params).sort()
    let data = {}
    key.forEach(item => { data[item] = params[item] })
    let dataStr = getQuery(data) + SECRET
    let sign = md5(dataStr).toUpperCase()
    request.body.sign = sign
    return request
})


//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
    if (response.data.code != 0 && response.data.code) {
        setTimeout(() => {
            wx.showToast({
                title: response.data.message,
                icon: 'none',
                duration: 2000
            })

        }, 100)
        return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
}, (err) => {
    return Promise.reject(err)
})

export default fly


const getQuery = (obj) => {
    const params = []
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
            // 如果值为undefined我们将其置空
        if (typeof value === 'undefined') {
            value = ''
        }
        // 对于需要编码的文本（比如说中文）我们要进行编码
        // params.push([key, encodeURIComponent(value)].join('='))
        params.push([key, value].join('='))
    })

    return params.join('&')
}