<template>
  <v-app>
    <div class="dashboard__main">
      <div class="dashboard__toolbar-wrap">
        <div class="dashboard__registration-wrap">
        <div class="dashboard__header-wrap">
          <h1 class="dashboard__header">New employee registration</h1>
          <i class="fas fa-portrait dashboard__header-icon"></i>
        </div>
        <div class="dashboard__registration-inputs">
          <input class="dashboard__registration-input"
                 type="text" name="email" placeholder="E-mail" v-model="registerEmail"/>
            <input class="dashboard__registration-input"
                   type="password" name="password" placeholder="Password"
                  v-model="registerPassword"/>
            <div class="dashboard__registration-button" v-on:click="registerUser">
                <p class="dashboard__registration-button_definition">Register</p>
            </div>
          </div>
          </div>
        <div class="dashboard__review-wrap">
          <div class="dashboard__header-wrap">
            <h1 class="dashboard__header">New employee registration</h1>
            <i class="fas fa-portrait dashboard__header-icon"></i>
          </div>
          <div class="dashboard__review-inputs">
            <input placeholder="Write the employee's id"
                   type="text" name="id" class="dashboard__review-employee" v-model="employee_id">
            <input placeholder="and tittle of review"
                   type="text" name="title" class="dashboard__review-employee"
                   v-model="review_title">
            <textarea name="review" class="dashboard__review-input" cols="30"
                      rows="10" placeholder="Write a review here" v-model="review_body">
            </textarea>
            <div class="dashboard__registration-button" v-on:click="addReview">
              <p class="dashboard__registration-button_definition">Add review</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__employee-wrap">
        <div class="dashboard__header-wrap">
          <h1 class="dashboard__header">Employee list</h1>
          <i class="fas fa-users dashboard__header-icon"></i>
        </div>
        <div class="dashboard__employee-list">
          <div class="dashboard__employee-unit" v-for="employee in employees" :key="employee.id">
            <div class="dashboard__employee-info">
              <p class="dashboard__employee-id">{{employee.id}}</p>
              <p class="dashboard__employee-username">{{employee.username}}</p>
            </div>
            <div class="dashboard__icons-wrap">
              <i title="delete user" class="fas fa-user-times dashboard__employee-icon-delete"
                 v-on:click="deleteUser(employee.id)"
              >
              </i>
              <i class="fas fa-edit dashboard__employee-icon-add-review"></i>
              <i class="fas fa-puzzle-piece dashboard__employee-icon-assign-review"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>

import {
  mapMutations, mapActions, mapGetters,
} from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '../router';
// eslint-disable-next-line import/no-cycle
import HTTP from '../http';


export default {
  name: 'Dashboard',
  data() {
    return {
      employees: [],
      registerEmail: '',
      registerPassword: '',
      employee_id: '',
      review_title: '',
      review_body: '',
    };
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    addReview() {
      HTTP().post('admin/review', {
        title: this.review_title,
        user_id: this.employee_id,
        body: this.review_body,
      });
    },
    getAllUsers() {
      HTTP()
        .get('get/admin/users/all')
        // eslint-disable-next-line no-return-assign
        .then((response) => (this.employees = response.data));
    },
    deleteUser(userId) {
      HTTP().delete(`admin/users/${userId}`);
      this.getAllUsers();
    },
    registerUser() {
      HTTP().post('auth/register', {
        email: this.registerEmail,
        password: this.registerPassword,
      });
      this.getAllUsers();
    },
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
    HTTP()
      .get('get/admin/users/all')
    // eslint-disable-next-line no-return-assign
      .then((response) => (this.employees = response.data));
  },
};
</script>
