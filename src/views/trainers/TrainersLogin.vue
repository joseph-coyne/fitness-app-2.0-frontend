<template>
  <div class="trainers-login">
    <div id="wrapper">

      <div id="shop">

        <!-- PAGE TITLE -->
        <header id="page-title">
         <li><a href="index.html">Home</a></li>
         <li class="active">Trainer Sign In</li>
        </header>


        <section class="container">

            <!-- LOGIN -->
              <h2>Sign <strong>In</strong></h2>
                <p>{{errors}}</p>
              <form v-on:submit.prevent="submit()">

                <!-- alert failed -->
                <div class="alert alert-danger" v-if="errors == 'Password confirmation doesn\'t match Password'">
                  <i class="fa fa-frown-o"></i> 
                  <strong>Passwords</strong> do not match!
                </div>                
                <div class="alert alert-danger" v-else-if="errors == 'Password can\'t be blank'">
                  <i class="fa fa-frown-o"></i> 
                  <strong>Password</strong> is blank!
                </div>

                <div class="row">
                  <div class="form-group">
                    <label>E-mail Address</label>
                    <input type="text" v-model="email" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="password" class="form-control">
                  </div>
                </div>
                <span class="remember-box checkbox">
                  <label for="rememberme">
                    <input type="checkbox" id="rememberme" name="rememberme">Remember Me
                  </label>
                </span>
                <input type="submit" value="Sign In" class="btn btn-primary pull-right" data-loading-text="Loading...">
            <!-- /LOGIN -->
              </form>
          <p>
            Don't have an account yet? <router-link to="/trainerssignup">Ignite a Sparq today!</router-link>
          </p>

        </section>

      </div>
    </div>
    <!-- /WRAPPER -->
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
        .post("http://localhost:3000/api/trainer_sessions", params)
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