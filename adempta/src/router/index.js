import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/SignUp.vue')
  },
  {
    path: '/admin_inf',
    name: 'Admin_inf',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Admin_inf" */ '../views/Admin_inf.vue')
  },
  {
    path: '/odabir_rada',
    name: 'Odabir_rada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Odabir_rada_admin.vue')
  },
  {
    path: '/dodaj',
    name: 'Dodaj_liniju',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Dodaj_liniju.vue')
  },
  {
    path: '/uredi',
    name: 'Uredi_liniju',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Uredi_liniju.vue')
  },
  {
    path: '/prikaz',
    name: 'Prikaz_linija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Prikaz_linija.vue')
  },
  {
    path: '/odabir_dana',
    name: 'Odabir_dana',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Odabir_dana.vue')
  },
  {
    path: '/obrisi',
    name: 'Obrisi_liniju',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Obrisi_liniju.vue')
  },
  {
    path: '/odabir_linija',
    name: 'OdabirLinija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Home.vue')
  },
  {
    path: '/buskol_stoja',
    name: 'buskol_stoja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/buskol_stoja.vue')
  },
  {
    path: '/odabir_grada',
    name: 'OdabirGrada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Odabir_grada.vue')
  },
  {
    path: '/pogreska',
    name: 'Pogreska',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir_rada_admin" */ '../views/Pogreska.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
