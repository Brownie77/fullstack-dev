import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
