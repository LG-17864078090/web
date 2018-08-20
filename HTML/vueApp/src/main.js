import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueTouch from 'vue-touch';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';

Vue.config.productionTip = false;
Vue.use(VueTouch,{name:'v-touch'});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
