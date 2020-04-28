<template>
  <v-app>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |

      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Registration</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
  </v-app>
</template>

<style lang="scss">

</style>
<script>

</script>
<style lang="scss" type="text/scss">
  @import "./assets/scss/main";
</style>
