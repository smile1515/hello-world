# hello-world
<HEAD
移动端学习demo
=======

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 项目使用到的前端技术
```
1.需要安装node webpack vue-cli
2.vue + vue-router + sass + eslint + webpack + mint-ui
```

### 项目创建及开发记录
```
1.vue creat hello-world（需要安装node、yarn、vue-cli）
    -选择默认配置
    -yarn install
    -yarn add node-sass sass-loader --save-dev
    -模板里面使用sass <style lang="scss">
    
2.esline检查forEach语句失败
    -重新安装core-js yarn add core-js --save-dev
    
3.eslint检查current.hasOwnProperty(key)语句失败
    -调整为 Object.prototype.hasOwnProperty.call(current, key)
    
4.iconfont
    -src/assets/font
    main.js引入自己添加的icon.css import './assets/font/iconfont.css'
    
5.移动端轮播banner
    -src/plugins/banner.js

6.flex布局
    flex布局：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
    ::-webkit-scrollbar css选择器 影响滚动条样式
    https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar

7.search page/iscroll/http请求 axios vue-resource /mock/vuex
    axios 前后端交互请求 base_url 配置   .env.development   .env.production   .env.staging
    yarn add axios --save-dev
    vue.config.js项目自定义配置，可选的配置文件 存在时@vue/client-serve会自动加载 
    proxy代理配置 http-proxy-middleware before模拟数据mockjs mockjs配置
    ES6的导入导出
    Vue inspect  查看vue-cli创建项目的webpack配置
    vue-loader是一个webpack的loader；可以将vue文件转换为JS模块
    vue-router yarn add vue-router --save
    vuex vue状态管理插件  yarn add vuex --save
    mint-ui yarn add vuex --save
    autoprefixer
8.响应式布局、字体大小适应

9.时间选择插件-wait

10.下拉刷新 上划加载更多 - /src/components/scroll.vue

11.图片预览-wait

12.dialog-wait

13.picker-wait
14.drag  views/Drag.vue
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
