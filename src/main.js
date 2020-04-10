import Vue from 'vue'
import Mint from 'mint-ui'
import VueXss from 'vue-xss'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'
import './assets/base.scss'
import './mock/index.js'
import store from './vuex/index.js'

var options = {
  // 默认白名单参考 xss.whiteList
  whiteList: {
    a: ['href', 'style','target'],
    img: ['src', 'alt'],
    p:['style']
  },
  stripIgnoreTag: true, // 去掉不在白名单上的标签   true：去掉不在白名单上的标签
  stripIgnoreTagBody: ['script'], // 去掉不在白名单上的标签及标签体   ['tag1', 'tag2']：仅去掉指定的不在白名单上的标签
  onTagAttr: function () {
    // todo
  },
}

Vue.use(Mint)
Vue.use(VueXss,options)
// 阻止在启动时生成生产提示
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
