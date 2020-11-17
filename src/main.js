import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import * as firebase from 'firebase';


import store from './components/Vuex/index'


const Signin=()=>import('./components/signinpage');
const Forum=()=>import('./components/forumMain');
const ReadPost=()=>import('./components/apiReadPost');
const viewPost=()=>import('./components/viewPost');
const punches=()=>import('./components/punchin');
const punchout=()=>import('./components/punchout');


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(moment)

const routes = [
  {
    path: '/',  
    component: Signin,
    name:'Signin'
  },
  { path: '/forumMain',  
  component: Forum,
  name:'home'
 },
  { path: '/apiReadPost', 
  component: ReadPost ,
  name:'ReadPost'
  },
  { path: '/viewPost', 
  component: viewPost ,
  name:'viewPost'
  },
  { path: '/punchin', 
  component: punches ,
  name:'punches'
  },
  { path: '/punchout', 
  component: punchout ,
  name:'punchout'
  },
]

// const store = new Vuex.Store(storeItems);

 const router = new VueRouter({
  routes,
  mode:'history'
});


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCZqZDCMdpzhgopW3RxdQ5Br6NXGgKzK_E",
  authDomain: "forum-app-abd13.firebaseapp.com",
  databaseURL: "https://forum-app-abd13.firebaseio.com",
  projectId: "forum-app-abd13",
  storageBucket: "forum-app-abd13.appspot.com",
  messagingSenderId: "109783841370",
  appId: "1:109783841370:web:ebf79366fa19d70c38f663"
};

firebase.initializeApp(firebaseConfig);

Vue.use(require("vue-moment"));

// https://blog.logrocket.com/vue-firebase-authentication/
 
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
