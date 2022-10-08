import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path:"/index",
        name:"index",
        component:() => import("../../src/components/HelloWorld.vue")
    },
    {
        path:"/bbl",
        name:"bbl",
        component:() => import("../../src/components/BabylonScene.vue")
    },

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;