import Mock from 'mockjs'
import data from './tbjson.js'
// import menu01 from '..assets/image/menu01.png'
// module.exports = function(app){
//     app.get('/api/index'),(rep,res) => {
//         return {
//             Mock.mock(articleList)
//         }
//     })
// }
// mock在代理前且network无法看到请求
Mock.mock(/\/api\/getData/,{
    'status':'200',
    'msg':'请求成功',
    'data':data
})