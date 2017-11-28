// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import App from './App'
import cordova from './cordova.js'
import router from './router'
import img from './assets/amigos.jpg'
import { sync } from 'vuex-router-sync'
import { mapState } from 'vuex'
import Materials from 'vue-materials'
sync(store, router);
Vue.use(Materials)
Vue.config.productionTip = false

Vue.use(VueOnsen)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    img,
    render: h => h(App),
    //template: '<App/>',
    mounted() {
        cordova.initialize()
    }
    //components: { App }*/
})