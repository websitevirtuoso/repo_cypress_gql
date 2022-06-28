import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'root',
    component: () => import('@/components/layouts/Authorized.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        meta: {
          breadcrumb: 'Home',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 500)
      })
    )
  },
})

export default router
