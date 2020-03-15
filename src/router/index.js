import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import DemoTB from '../views/DemoTB.vue'
import FontSizeTwo from '../views/FontSizeTwo.vue'

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
        path:"fontsize_two",
        title:"devicePixelRatio rem",
        component:FontSizeTwo
    }]
})

router.beforeEach((to,from,next) => {
    next();
})

export default router;