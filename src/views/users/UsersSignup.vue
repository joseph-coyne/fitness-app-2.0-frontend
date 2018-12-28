<template>
  <div class="users-signup">
  <!-- WRAPPER -->
    <div id="wrapper">
      <div id="shop">
        <!-- PAGE TITLE -->
        <header id="page-title">
          <div class="container">
            <h1>Sign up</h1>
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">Sign up</li>
            </ul>
          </div>
        </header>

        <section class="container">

          <div class="row">

            <!-- REGISTER -->
            <div class="col-md-6">

              <h2>Create <strong>Account</strong></h2>

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
                  <div class="form-group">
                    <div class="col-md-12">
                      <label>E-mail Address</label>
                      <input type="text" v-model="email" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <div class="col-md-6">
                      <label>Password</label>
                      <input type="password" v-model="password" class="form-control">
                    </div>
                    <div class="col-md-6">
                      <label>Re-enter Password</label>
                      <input type="password" v-model="passwordConfirmation" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" value="Sign Up" class="btn btn-primary pull-right push-bottom" data-loading-text="Loading...">
                  </div>
                </div>

              </form>

            </div>
            <!-- /REGISTER -->

            <!-- WHY? -->
            <div class="col-md-6">

              <h2>Take your first step.</h2>

              <div class="white-row">

                <h4>There's never been a better time to meet your goals.</h4>

                <p>Once you're registered, you can:</p>
                <ul class="list-icon check">
                  <li>Find professional trainers in your area</li>
                  <li>Practice or learn optimum exercises for your goals</li>
                  <li>Achieve maximum results without wasting time</li>
                  <li>Nutrition tracking and planning</li>
                  <li>Connect with the Sparq community</li>
                </ul>

                <hr class="half-margins" />

                <p>
                  Already have an account?
                   <router-link to="/userslogin">Sign in</router-link>
                </p>
              </div>

              <div class="white-row">
                <h4>Join the Sparq Team</h4>
                <p>
                  If you're looking to become a Sparq personal trainer <router-link to="/trainerssignup">register here</router-link>.
                </p>
              </div>

            </div>
            <!-- /WHY? -->

          </div>

        </section>

      </div>
    </div>
  <!-- /WRAPPER -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/userslogin");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>