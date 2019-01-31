<template>
  <div class="users-login login-page full-screen">
    <div class="wrapper">
      <div class="page-header" style="background-image: url('../assets/img/sections/bruno-abatti.jpg');">
        <div class="filter"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
              <div class="card card-register">
                <h3 class="card-title">Welcome</h3>
                <form class="register-form" v-on:submit.prevent="submit()">
                  <label>Email</label>
                  <input type="email" class="form-control no-border" placeholder="Email" v-model="email">
                  <label>Password</label>
                  <input type="password" class="form-control no-border" placeholder="Password" v-model="password">
                  <button class="btn btn-danger btn-block btn-round" type="submit">Sign In</button>
                  <br>
                  <div v-if="errors">
                    Wrong <strong>E-mail Address</strong> or <strong>Password</strong>!
                  </div>
                </form>
                <div class="forgot">
                  <a href="#paper-kit" class="btn btn-link btn-danger">Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>

<script>
import axios from "axios";

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
      axios
        .post("http://localhost:3000/api/user_sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", true);
          this.$router.push("/trainers");
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