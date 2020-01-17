import Vue from 'vue';
// import axios from 'axios';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app');