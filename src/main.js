import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/main.css'
// import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store.js'

//
// Vue.prototype.$http = Axios
// const token = localStorage.getItem('token');
// if (token){
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
// }



const app = createApp(App)
app.use(router, store)
app.mount('#app')

// createApp(App).mount('#app')r
