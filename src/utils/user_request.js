import axios from 'axios';    // 拦截器

// 1. 创建实例默认值
const service = axios.create({
    baseURL: '/user',  // 通过跨域的方式，所以不用写http..
    timeout: 10000,
    withCredentials: false,  // 表示跨域请求时是否需要使用凭证
})


// 2. 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
});


// 3. 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;