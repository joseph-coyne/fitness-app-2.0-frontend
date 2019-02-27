<template>
  <div class="trainers-login">
    <!-- LOGIN -->
    <h2>Trainer Sign In</h2>
    <p>{{errors}}</p>
    <form v-on:submit.prevent="submit()">
      <!-- alert failed -->
      <div v-if="errors == 'Password confirmation doesn\'t match Password'">
        <strong>Passwords</strong> do not match!
      </div>                
      <div v-else-if="errors == 'Password can\'t be blank'">
        <strong>Password</strong> is blank!
      </div>

      <div>
        <div>
          <label>E-mail Address</label>
          <input type="text" v-model="email">
        </div>
      </div>
      <div>
        <div>
          <label>Password</label>
          <input type="password" v-model="password">
        </div>
      </div>
      <input type="submit" value="Sign In" data-loading-text="Loading...">
  <!-- /LOGIN -->
    </form>
    <p>
      Don't have an account yet? <router-link to="/trainerssignup">Ignite a Sparq today!</router-link>
    </p>
  </div>
</template>

<style>

</style>
<script>
import axios from "axios";
import TrainerService from '../../services/TrainerService';

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      TrainerService.loginTrainer(params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("trainer_id", true);
          this.$router.push("/trainers/me");
        })
        .catch(error => {
          this.errors = "Invalid email or password.";
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>