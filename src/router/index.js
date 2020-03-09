import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import FontSize from '../views/FontSize.vue'
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
        path:"/fontsize",
        title:"clientWidth rem",
        component: FontSize,
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