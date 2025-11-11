import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/projects' },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/pages/ProjectsPage.vue'),
        meta: { title: 'Proyectos' }
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('../pages/InfoPage.vue'),
        meta: { title: 'Información' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../pages/NotFound.vue'),
        meta: { title: 'Página no encontrada' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 }; }
});

// Título por ruta
router.afterEach((to) => {
    document.title = (to.meta?.title ? `${to.meta.title} | Portafolio` : 'Portafolio');
});

export default router;
