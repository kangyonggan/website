import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Loyout.vue'
import Index from '../views/Index.vue'
import NotFound from '../views/404.vue'
import util from '@/util'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/:catchAll(.*)',
        meta: {
          title: '404'
        },
        component: NotFound
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  util.title(to.meta.title);
  next()
})

export default router
