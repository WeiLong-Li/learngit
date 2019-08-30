import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '首页' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: '消息' }
                },
                {
                    path: '/basic',
                    component: resolve => require(['../components/page/Basic.vue'], resolve),
                    meta: { title: '泰州队列人群基本情况'}
                },
                {
                    path: '/visit',
                    component: resolve => require(['../components/page/Visit.vue'], resolve),
                    meta: { title: '泰州队列人群随访情况' }
                },
                {
                    path: '/laboratory',
                    name:'laboratory',
                    component: resolve => require(['../components/page/Laboratory.vue'], resolve),
                    meta: { title: '智能化实验室管理' }
                },
                 {
                    path: '/ibmsmonitor',
                    component: resolve => require(['../components/page/IBMS_Monitor.vue'], resolve),
                    meta: { title: '视频监控管理' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
