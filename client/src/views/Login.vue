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
    ]),
  },
};
</script>
