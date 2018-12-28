<template>
  <div class="trainers-login">
    <div id="wrapper">

      <div id="shop">

        <!-- PAGE TITLE -->
        <header id="page-title">
          <div class="container">
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">Trainer Sign In</li>
            </ul>
          </div>
        </header>


        <section class="container">

          <div class="row">

            <!-- LOGIN -->
            <div class="col-md-6">

              <h2>Sign <strong>In</strong></h2>
                <p>{{errors}}</p>
              <form class="white-row" v-on:submit.prevent="submit()">

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
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>E-mail Address</label>
                      <input type="text" v-model="email" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" v-model="password" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <span class="remember-box checkbox">
                      <label for="rememberme">
                        <input type="checkbox" id="rememberme" name="rememberme">Remember Me
                      </label>
                    </span>
                  </div>
                  <div class="col-md-6">
                    <input type="submit" value="Sign In" class="btn btn-primary pull-right" data-loading-text="Loading...">
                  </div>
                </div>
              </form>
            </div>
            <!-- /LOGIN -->
          </div>
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