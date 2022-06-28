import { Router, RouteRecordName } from 'vue-router'

const moduleRoute = {
  name: 'countries',
  path: '/countries',
  component: () => import('./pages/Index.vue'),
  meta: {
    breadcrumb: {
      label: 'Countries',
      parent: 'home',
    },
  },
}

export default (router: Router, parentName: RouteRecordName) => {
  router.addRoute(parentName, moduleRoute)
}
