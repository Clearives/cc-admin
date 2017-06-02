import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import E404 from '@/pages/404';
import User from '@/pages/profile/User';
import Hello from '@/components/Hello';
import Home from '@/pages/layout/Home';
import Table from '@/pages/components/Table';
import Dashboard from '@/pages/dashboard';
import Lifecycle from '@/pages/collection/Lifecycle';
import Vuex from '@/pages/collection/Vuex';
import OneArticle from '@/pages/collection/OneArticle';
import Communication from '@/pages/collection/Communication';
import Html2str from '@/pages/tools/Html2str';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    }, {
      path: '/404',
      component: E404,
      name: '',
      hidden: true
    }, {
      path: '/user',
      component: Home,
      name: 'User',
      hidden: true,
      children: [
        {
          path: '/user/:userId',
          component: User,
        }
      ]
    }, {
      path: '/',
      component: Home,
      redirect: '/dashboard',
      name: 'Home',
      hidden: true,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        }
      ]
    }, {
      path: '/component',
      component: Home,
      name: 'Component',
      redirect: '/component/table',
      iconCls: 'fa fa-database mr10',
      children: [
        {
          path: '/component/table',
          component: Table,
          name: 'Table'
        }, {
          path: '/component/form',
          component: Hello,
          name: 'Form'
        }
      ]
    }, {
      path: '/collection',
      component: Home,
      name: 'Collection',
      redirect: '/collection/vuex',
      iconCls: 'fa fa-book mr10',
      children: [
        {
          path: '/collection/lifecycle',
          component: Lifecycle,
          name: 'Lifecycle'
        }, {
          path: '/collection/vuex',
          component: Vuex,
          name: 'Vuex'
        }, {
          path: '/collection/onearticle',
          component: OneArticle,
          name: 'OneArticle'
        }, {
          path: '/collection/communication',
          component: Communication,
          name: 'Communication'
        }
      ]
    }, {
      path: '/tools',
      component: Home,
      name: 'Tools',
      redirect: '/tools/html2str',
      iconCls: 'fa fa-wrench mr10',
      children: [
        {
          path: '/tools/html2str',
          component: Html2str,
          name: 'Html2str'
        }
      ]
    }, {
      path: '/setting',
      component: Home,
      name: 'Setting',
      redirect: '/setting/table2',
      iconCls: 'fa fa-cog mr10',
      children: [
        {
          path: '/setting/table2',
          component: Hello,
          name: 'Table'
        }, {
          path: '/setting/form2',
          component: Hello,
          name: 'Form'
        }
      ]
    }, { path: '*', redirect: '/404', hidden: true }
  ]
});
