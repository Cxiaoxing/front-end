import service from '../utils/user_request';

const myHeaders = {
    'content-type': 'application/x-www-form-urlencoded'
}

// 登陆接口
export function LoginRequest(data){
    return service.request({
        url:'/login',
        method:'post',
        data:data,
        // data:"identity_info=admin&password=admin",
        headers: myHeaders,
    })
}

// 登出接口
export function LogoutRequest(){
    return service.request({
        url:'/logout', 
        method:'get',
        // params:params,  // 请求类型为get时参数
        headers: myHeaders
    })
}

// 发送验证码接口
export function SendCodeRequest(data){
    return service.request({
        url:'/get_verification_code',
        method:'post',
        data:data,
        headers: myHeaders
    })
}

// 快速登陆接口
export function QuickLoginRequest(data){
    return service.request({
        url:'/quick_login',
        method:'post',
        data:data,
        headers: myHeaders
    })
}

// 获取信息
export function GetInfoRequest(){
    return service.request({
        url:'/me',
        method: 'get',
        headers: myHeaders
    })
}