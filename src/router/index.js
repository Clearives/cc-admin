import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Hello from '@/components/Hello';
import Home from '@/pages/Home';

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
          component: Hello,
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
          path: '/table1',
          component: Hello,
          name: 'Table'
        }, {
          path: '/form1',
          component: Hello,
          name: 'Form'
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
