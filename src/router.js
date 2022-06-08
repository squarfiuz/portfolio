
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
    name: 'index',
    children: [
      {
        path: '',
        component: () => import('./pages/index/index.vue'),
        name: 'index-index'
      },
      {
        path: '/aboutme',
        component: () => import('./pages/index/aboutme.vue'),
        name: 'index-aboutme'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;