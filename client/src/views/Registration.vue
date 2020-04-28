<template>
  <div>
  <div>
   <h1>Register</h1>
  </div>
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
    <v-btn color="green" dark v-on:click="registerAdmin">
      <v-icon class="mr-2">account_circle</v-icon>
      Register
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('authentication', [
      'registerAdmin',
    ]),
  },
  name: 'Registration',
};
</script>
<style lang="scss">
  .login-input {
  height: 25px;
  font-weight: 100px;
  border: 1px solid slategray;
    margin-bottom: 10px;
  }
  .password-input {
    height: 25px;
    font-weight: 100px;
    border: 1px solid slategray;
  }
  .wrap-input {
    width: 250px;
    display: flex;
    justify-content: center;
  flex-direction: column;
  }
</style>
