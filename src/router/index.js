import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import DemoTB from '../views/DemoTB.vue'
import Search from '../views/Search.vue'
import LoadMore from '../views/LoadMore.vue'

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
    }]
})

router.beforeEach((to,from,next) => {
    next();
})

export default router;