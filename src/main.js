import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'
import './mock/index.js'
import store from './vuex/index.js'

Vue.use(Mint)
// 阻止在启动时生成生产提示
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
