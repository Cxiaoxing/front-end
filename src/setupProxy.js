// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            '/user',
            {  //`user`是需要转发的请求 
                target: 'http://115.29.177.136:8080',  // 这里是接口服务器地址
                changeOrigin: true,
            })
    )
}
