import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/ProjectsPage.vue'),
        meta: { title: 'Proyectos' }
    },

    {
        path: '/info',
        name: 'info',
        component: () => import('@/pages/InfoPage.vue'),
        meta: { title: 'Información' }
    },

    {
        path: '/:slug',
        name: 'project-detail',
        component: () => import('@/pages/ProjectDetailPage.vue'),
        props: true
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/NotFound.vue'),
        meta: { title: 'Página no encontrada' }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 }; }
});


export default router;
