import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import(/* webpackChunkName: 'List' */ '@/views/List/List.vue'),
  },
];
