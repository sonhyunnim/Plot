import Vue from 'vue';
import App from './App';
import toggle from './toggle';
import router from './router';
import axios from 'axios';

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});