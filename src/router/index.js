import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'shop-cart',
        name: 'Shop-cart',
        component: () => import(/* webpackChunkName: "shop-cart" */ '../views/Shop-cart.vue')
      },
      {
        path: '/shop-grid-full',
        name: 'Shop-grid-full',
        component: () => import('../views/Shop-grid-full')
      },
      {
        path: '/shop-products-name',
        name: 'Shop-products-name',
        component: () => import('../views/Shop-products-name')
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
