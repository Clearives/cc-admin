import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Hello from '@/components/Hello';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
