import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import DemoTB from '../views/DemoTB.vue'
import Search from '../views/Search.vue'
import LoadMore from '../views/LoadMore.vue'
import VuexDemo from '../views/VuexDemo.vue'
import VuexDemo2 from '../views/VuexDemo2.vue'
import FilterDemo from '../views/FilterDemo.vue'
import CpicDemo from '../views/Cpic.vue'
import Drag from '../views/Drag.vue'
import DragView from '../views/DragView.vue'
import VSlot from '../views/VSlot.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[{
        path:"*",
        redirect:"/"
    },{
        path:"/",
        redirect:"/index"
    },{
        path:'/dragView',
        title:'拖拽插件',
        component:DragView,
    },{
        path:'/drag',
        title:'拖拽',
        component:Drag,
    },{
        path:"/index",
        component: HelloWorld
    },{
        path:"/demoTB",
        title:"淘宝首页demo",
        component: DemoTB,
    },{
        path:"/search",
        title:"search page",
        component:Search
    },{
        path:'/loadMore',
        title:'loadmore',
        component:LoadMore
    },{
        path:'/vuexDemo/:id',
        title:'Vuex Demo',
        name:'VuexDemoById',
        component:VuexDemo
    },{
        path:'/vuexDemo2',
        title:'Vuex Demo',
        component:VuexDemo2
    },{
        path:'/vuexDemo',
        title:'Vuex Demo',
        name:'VuexDemo',
        component:VuexDemo
    },{
        path:'/filterDemo',
        title:'Filter',
        component:FilterDemo
    },{
        path:'/cpicDemo',
        component:CpicDemo
    },{
        path:'/vslot',
        component:VSlot
    }]
})

// 路由钩子
router.beforeEach((to,from,next) => {
    next();
})

export default router;