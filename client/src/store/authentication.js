// eslint-disable-next-line import/no-cycle
import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    loginEmail: null,
    loginPassword: null,
    registerEmail: null,
    registerPassword: null,
    token: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null);
      router.push('/login');
    },
    loginAdmin({ state, commit }) {
      return HTTP().post('auth/admin/login', {
        username: state.loginEmail,
        password: state.loginPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/dashboard');// надо сменить урлу
        });
    },
    registerAdmin({ state, commit }) {
      return HTTP().post('auth/admin/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/login');
        });
    },
    registerEmployee({ state }) {
      return HTTP().post('auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      });
      // .then(({ data }) => {
      //   commit('setToken', data.token);
      //   router.push('/login');
      // });
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
  },
};
