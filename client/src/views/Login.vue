<template>
  <div>
    <div>
      <h1>login</h1>
    </div>
    <div class="wrap-input">
      <v-text-field
        label="Email"
        placeholder="Email"
        :value="loginEmail"
        v-on:input="setLoginEmail"
      >

      </v-text-field>

      <v-text-field
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        :value="loginPassword"
        v-on:input="setLoginPassword"
      >
      </v-text-field>

    </div>
    <v-btn color="green" dark v-on:click="loginAdmin">
      <v-icon class="mr-2">account_circle</v-icon>
      Login
    </v-btn>
<!--    <div class="dashboard__registration-wrap">-->
<!--      <div class="dashboard__header-wrap">-->
<!--        <h1 class="dashboard__header">Admin login</h1>-->
<!--        <i class="fas fa-portrait dashboard__header-icon"></i>-->
<!--      </div>-->
<!--      <div class="dashboard__registration-inputs">-->
<!--        <input class="dashboard__registration-input"-->
<!--               type="text" name="email" placeholder="E-mail" v-bind:value="loginEmail"-->
<!--               v-on:input="setLoginEmail"/>-->
<!--        <input class="dashboard__registration-input"-->
<!--               type="password" name="password" placeholder="Password"-->
<!--               v-bind:value="loginPassword"-->
<!--               v-on:input="setLoginPassword"/>-->
<!--        <div class="dashboard__registration-button" v-on:click="registerUser">-->
<!--          <p class="dashboard__registration-button_definition">Register</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Login',
  computed: {
    ...mapState('authentication', [
      'loginEmail',
      'loginPassword',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setLoginEmail',
      'setLoginPassword',
    ]),
    ...mapActions('authentication', [
      'loginAdmin',
      'loginUser',
    ]),
  },
};
</script>
