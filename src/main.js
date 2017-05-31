// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import store from './store/index.js'
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'font-awesome/css/font-awesome.min.css'
import router from './router';
import Mock from './mock'
import { createUniqueString } from './assets/js/utils'


console.log(createUniqueString())
Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(ElementUI)
let useMock = location.search.indexOf('mock') > -1
let mockPath = ['/login', '/table']
// useMock && Mock.bootstrap();
Mock.bootstrap();
router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  let backUrl = location.href;
  if (!user && to.path != '/login') {
    sessionStorage.setItem('backUrl', backUrl);
    let _path = '/login'
    next({ path: _path })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
