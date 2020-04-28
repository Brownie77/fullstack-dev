// eslint-disable-next-line import/no-cycle
// import HTTP from '../http';
// import router from '../router';

// eslint-disable-next-line import/no-cycle
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    users: {},
  },
  getters: {
  },
  actions: {
    getUsers({ commit }) {
      HTTP().get('get/admin/users/all')
        .then((res) => {
          commit('setUserList', res.data);
        });
    },
  },
  mutations: {
    setUserList(state, users) {
      state.users = users;
    },
  },
};
