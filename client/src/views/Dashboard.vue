<template>
  <v-app>
  <div class="dashboard__main">
    <div class="dashboard__toolbar-wrap">
      <div class="dashboard__registration-wrap">
<h1 class="dashboard__header">New employee registration</h1>
    <div class="wrap-input">
      <v-text-field
        label="Email"
        placeholder="Email"
        :value="registerEmail"
        v-on:input="setRegisterEmail"
      >

      </v-text-field>

      <v-text-field
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        :value="registerPassword"
        v-on:input="setRegisterPassword"
      >
      </v-text-field>

    </div>
    <v-btn color="green" dark v-on:click="registerEmployee">
      <v-icon class="mr-2">account_circle</v-icon>
      Register
    </v-btn>
      </div>
    </div>
    <div class="dashboard__employee-wrap">
      <div class="dashboard__header-wrap">
        <h1 class="dashboard__header">Employee list</h1>
        <i class="fas fa-users dashboard__header-icon"></i>
      </div>
      <div class="dashboard__employee-list">
        <div class="dashboard__employee-unit" v-for="employee in employees" :key="employee.id">
          <p class="dashboard__employee-id">{{employee.id}}</p>
          <p class="dashboard__employee-username">{{employee.username}}</p>
        </div>
      </div>
      <div class="dashboard__employee-btn" v-on:click="registerEmployee">check</div>
    </div>
  </div>
  </v-app>
</template>
<script>

import {
  mapState, mapMutations, mapActions, mapGetters,
} from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '../router';
// eslint-disable-next-line import/no-cycle
import HTTP from '../http';

export default {
  name: 'Dashboard',
  data() {
    return {
      some: 'some some some',
      employees: [],
    };
  },
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'users',
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('authentication', [
      'registerEmployee',
    ]),
    ...mapActions('admin', [
      'getUsers',
    ]),
  },
  // eslint-disable-next-line consistent-return
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
    HTTP().get('get/admin/users/all')
      // eslint-disable-next-line no-return-assign
      .then((response) => (this.employees = response.data));
  },
};
</script>
