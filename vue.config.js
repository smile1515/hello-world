module.exports = {
    // webpack-dev-server
    // devServe: {
    //     proxy:'http://localhost:8080' 字符串时异步请求有效
    //     
    // }
    // configureWebpack: {
    //     module:{
    //         rules:[
    //             {
    //                 test: /\.js$/, 
    //                 use: 'babel-loader', 
    //                 exclude: /node_modules/,
    //             }
    //         ]
    //     }
    // },
    devServer:{
        proxy:{
            '^/api': {
                // 豆瓣 代理测试
                target:'http://api.douban.com/v2',
                ws:true,
                changeOrigin:true,
                pathRewrite: {
                  '^/api': '/vue'
                }
            }
        },
        // before在proxy之前 开启之后代理无效
        before(app){
            console.log('devServe app')
            // app.get("/api/getData", (req, res) => {
            //     res.json({
            //         'status':'200',
            //         'msg':'请求成功',
            //         'data':''
            //     });
            // });
        }
    }
}