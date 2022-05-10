import Vue from 'vue'
import VueRouter from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import shop from '../views/Shop-page.vue';
import home from '../views/Home-page.vue';
import about from '../views/About-page.vue';
import contact from '@/views/Contact-page.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  }, 
  
  {
    path: '/Shop',
    name: 'Shop',
    component: shop
  },

  {
    path: '/About',
    name: 'About',
    component: about
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: contact
  },
  
    //{ route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

const router = new VueRouter({
  routes
})

export default router