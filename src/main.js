// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import App from './App'
import cordova from './cordova'
import router from './router'
import auth from './auth'
import img from './assets/amigos.jpg'
import { sync } from 'vuex-router-sync'
import { mapState } from 'vuex'
import Materials from 'vue-materials'
import axios from 'axios'
sync(store, router);
Vue.use(Materials)
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VueOnsen)
Vue.use(axios)

auth.checkAuth()
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    img,
    auth,
    cordova,
    render: h => h(App),
    //template: '<App/>',
    /* mounted() {
       cordova.initialize()
     }*/
    components: { App }
})