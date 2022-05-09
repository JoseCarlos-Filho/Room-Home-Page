import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import shop from '../views/shop.vue';
import home from '../views/home.vue';
import about from '../views/about.vue';
import contact from '../views/contact.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  }, 
  
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },

  {
    path: '/about',
    name: 'about',
    component: about
  },

  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  
    //{ route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
  routes
})

export default router
