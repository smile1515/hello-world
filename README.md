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
2.vue + vue-router + sass + eslint + webpack
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

7.响应式布局、字体大小适应-wait

8.时间选择插件-wait

9.下拉刷新 上划加载更多-wait

10.图片预览-wait

11.dialog-wait

12.picker-wait

```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
