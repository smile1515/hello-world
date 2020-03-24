import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import DemoTB from '../views/DemoTB.vue'
import Search from '../views/Search.vue'
import LoadMore from '../views/LoadMore.vue'
import VuexDemo from '../views/VuexDemo.vue'
import VuexDemo2 from '../views/VuexDemo2.vue'
import FilterDemo from '../views/FilterDemo.vue'
import cpicDemo from '../views/cpic.vue'
Vue.use(Router)

const router = new Router({
     routes:[{
         path:"*",
         redirect:"/"
     },{
         path:"/",
         redirect:"/index"
     },{
         path:"/index",
         component: HelloWorld
     },{
        path:"/DemoTB",
        title:"淘宝首页demo",
        component: DemoTB,
    },{
        path:"/Search",
        title:"search page",
        component:Search
    },{
        path:'/LoadMore',
        title:'loadmore',
        component:LoadMore
    },{
        path:'/VuexDemo/:id',
        title:'Vuex Demo',
        name:'VuexDemoById',
        component:VuexDemo
    },{
        path:'/VuexDemo2',
        title:'Vuex Demo',
        component:VuexDemo2
    },{
        path:'/VuexDemo',
        title:'Vuex Demo',
        name:'VuexDemo',
        component:VuexDemo
    },{
        path:'/FilterDemo',
        title:'Filter',
        component:FilterDemo
    },{
        path:'/cpicDemo',
        component:cpicDemo
    }]
})

// 路由钩子
router.beforeEach((to,from,next) => {
    next();
})

export default router;