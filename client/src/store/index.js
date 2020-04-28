import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
// eslint-disable-next-line import/no-cycle
import authentication from './authentication';
// eslint-disable-next-line import/no-cycle
import admin from './admin';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    baseUrl: 'api',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
    admin,
  },
  // plugins: [
  //   createPersistedState(),
  // ],
});
