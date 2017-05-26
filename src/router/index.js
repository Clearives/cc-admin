import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Hello from '@/components/Hello';
import Home from '@/pages/layout/Home';
import Table from '@/pages/components/Table';
import Dashboard from '@/pages/dashboard';
import Vuex from '@/pages/collection/Vuex';
import OneArticle from '@/pages/collection/OneArticle';
import Communication from '@/pages/collection/Communication';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    }, {
      path: '/',
      component: Home,
      redirect: '/dashboard',
      name: 'Home',
      hidden: true,
      children: [{ path: 'dashboard', component: Dashboard }]
    }, {
      path: '/component',
      component: Home,
      name: 'Component',
      redirect: '/component/table',
      iconCls: 'el-icon-message',
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
      iconCls: 'el-icon-star-on',
      children: [
        {
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
      path: '/setting',
      component: Home,
      name: 'Setting',
      redirect: '/setting/table2',
      iconCls: 'el-icon-setting',
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
    }
  ]
});
