import Vue from 'vue';
import Router from 'vue-router';

// const Foo = resolve => require(['../views/hello.vue'], resolve);
// import hello from '../views/hello.vue';

import login from './components/login.vue';
import HomePage from './components/HomePage.vue';
import Perfil from './components/Perfil.vue'
Vue.use(Router);

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'login', path: '/', component: login },
    { name: 'home', path: '/home', component: HomePage },
    {name: 'perfil', path: '/perfil', component: Perfil},
  ],
});