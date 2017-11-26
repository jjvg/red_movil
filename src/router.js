import Vue from 'vue';
import Router from 'vue-router';

// const Foo = resolve => require(['../views/hello.vue'], resolve);
// import hello from '../views/hello.vue';

import login from './components/login.vue'
import HomePage from './components/HomePage.vue'
import CrearPost from './components/CrearPost.vue'
import Perfil from './components/Perfil.vue'
import DetallePost from './components/DetallePost.vue'
import EditarPerfil from './components/EditarPerfil.vue'
import RegistrarEnte from './components/RegistrarEnte.vue'
import RegistrarCom from './components/RegistrarCom.vue'
import Registro1 from './components/Registro1.vue'
import Principal from './components/Principal.vue'
Vue.use(Router);

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { name: 'login', path: '/', component: login },
        { name: 'home', path: '/home', component: HomePage },
        { name: 'perfil', path: '/perfil', component: Perfil },
        { name: 'crearpost', path: '/nuevopost', component: CrearPost },
        { name: 'detallepost', path: '/detallepost', component: DetallePost },
        { name: 'editarperfil', path: '/editarperfil', component: EditarPerfil },
        { name: 'regente', path: '/registrarente', component: RegistrarEnte },
        { name: 'regcom', path: '/registrarcom', component: RegistrarCom },
        { name: 'paso1', path: '/Paso1', component: Registro1 },
        { name: 'principal', path: '/principal', component: Principal },
    ],
});