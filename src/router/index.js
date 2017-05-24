import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Hello from '@/components/Hello';
import Home from '@/pages/layout/Home';
import Table from '@/pages/components/Table';
import Vuex from '@/pages/collection/Vuex';
import OneArticle from '@/pages/collection/OneArticle';

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
      name: 'Component',
      iconCls: 'el-icon-message',
      children: [
        {
          path: '/table',
          component: Table,
          name: 'Table'
        }, {
          path: '/form',
          component: Hello,
          name: 'Form'
        }
      ]
    }, {
      path: '/',
      component: Home,
      name: 'Collection',
      iconCls: 'el-icon-star-on',
      children: [
        {
          path: '/vuex',
          component: Vuex,
          name: 'Vuex'
        }, {
          path: '/onearticle',
          component: OneArticle,
          name: 'OneArticle'
        }
      ]
    }, {
      path: '/',
      component: Home,
      name: 'Setting',
      iconCls: 'el-icon-setting',
      children: [
        {
          path: '/table2',
          component: Hello,
          name: 'Table'
        }, {
          path: '/form2',
          component: Hello,
          name: 'Form'
        }
      ]
    }
  ]
});
