import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import router from './router';
import App from './components/App.vue';

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#root');