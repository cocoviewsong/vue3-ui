import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/button',
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/components/demo/index.vue'),
    },
  ],
});

export default router;
