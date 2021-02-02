import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from './page/home';
import Index from './page/index'
Vue.use(vueRouter);

export default new vueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    component:Index
                },
                {
                    path:'/cart',
                    component:()=>import('./page/cart')
                }
            ]
            
        }
    ]
})