<template>
  <div class="users-login">
    <!-- WRAPPER -->
    <div id="wrapper">

      <div id="shop">

        <!-- PAGE TITLE -->
        <header id="page-title">
          <div class="container">
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">Sign In</li>
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
                <div v-if="errors" class="alert alert-danger">
                  <i class="fa fa-frown-o"></i> 
                  Wrong <strong>E-mail Address</strong> or <strong>Password</strong>!
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
            Don't have an account yet? <router-link to="/userssignup">Find your Sparq today!</router-link>
          </p>

        </section>

      </div>
    </div>
    <!-- /WRAPPER -->













<!--     <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" value="Submit">
      </form> -->
    </div>
  </div>
</template>
<style>
/*  body {
    margin-top: 100px;
  }*/
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