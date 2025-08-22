import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: import('../view/Home.vue'),
            },
            {
                path: '/flykid',
                component: import('../view/Home.vue'),
            },
            {
                path: '/coding',
                component: import('../view/Home.vue'),
            },
            {
                path: '/study',
                component: import('../view/Home.vue'),
            },
            {
                path: '/article',
                component: import('../view/Article.vue'),
            },
            {
                path: '/team',
                component: import('../view/Team.vue'),
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(), 
  routes 
})

export default router