import { createRouter, createWebHistory } from 'vue-router';

export const createBasePath = () => {
  const base = process.env.BASE_PATH ?? '/';
  return base;
};

const basePath = createBasePath();

const router = createRouter({
  history: createWebHistory(basePath),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/home.vue'),
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('./pages/hello.vue'),
    },
  ],
});

export default router;
