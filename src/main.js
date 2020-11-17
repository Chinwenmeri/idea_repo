import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import Notify from 'vue-notifyjs'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import FileUpload from 'v-file-upload';
import Paginate from 'vuejs-paginate'
import Particles from 'particles.vue'
import VueParticles from 'vue-particles';
// take note of the call.
// this is the vuex call  
import storeItems from './store/store.js'
import 'vue-loading-overlay/dist/vue-loading.css';

const Todo = () =>
    import ('./components/Todo.vue');
const description = () =>
    import ('./components/description.vue');
const cards = () =>
    import ('./components/cards.vue');


Vue.use(Notify)
Vue.use(FileUpload)
Vue.use(VueRouter)
Vue.use(Loading)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.component('paginate', Paginate)
Vue.use(Particles)
Vue.use(VueParticles)

const routes = [{
        path: '/',
        component: Todo,
        name: 'home'
    },
    {
        path: '/description/:id',
        component: description,
        name: 'description'
    },
    {
        path: '/cards',
        component: cards,
        name: 'cards'
    },
]

// proper declaration of stores 
const store = new Vuex.Store(storeItems);

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
    router,
    // store declarations and use right here 
    store,
    render: h => h(App),
}).$mount('#app')