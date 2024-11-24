import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/badge' },
    {
          path: '/badge',
          name: 'Badge',
          component: () => import('@/components/badge/demo/index.vue'),
        },
{
          path: '/button',
          name: 'Button',
          component: () => import('@/components/button/demo/index.vue'),
        },
{
          path: '/tag',
          name: 'Tag',
          component: () => import('@/components/tag/demo/index.vue'),
        },
{
          path: '/tool-tip',
          name: 'ToolTip',
          component: () => import('@/components/tool-tip/demo/index.vue'),
        },
{
          path: '/video',
          name: 'Video',
          component: () => import('@/components/video/demo/index.vue'),
        }
  ]
});

export default router;