import Vue from 'vue';
import VueRouter from 'vue-router';
import StatMain from '../views/StatMain.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'StatMain',
    meta: { layout: 'MainLayout' },
    component: StatMain,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
