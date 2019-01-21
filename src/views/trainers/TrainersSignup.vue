<template>
  <div class="trainers-signup">
    <h2>Create <strong>Account</strong></h2>

    <form v-on:submit.prevent="submit()">
      <!-- alert failed -->
      <div v-if="errors == 'Password can\'t be blank'" class="alert alert-danger">
        <i class="fa fa-frown-o"></i> 
        <strong>Password</strong> cannot be blank!
      </div>                  
      <div v-else-if="errors == 'Email can\'t be blank'" class="alert alert-danger">
        <i class="fa fa-frown-o"></i> 
        <strong>Email</strong> cannot be blank!
      </div>

      <div class="row">
        <label>E-mail Address</label>
        <input type="text" v-model="email" class="form-control">
      </div>
      <div class="row">
       <label>Password</label>
       <input type="password" v-model="password" class="form-control">
        <label>Re-enter Password</label>
         <input type="password" v-model="passwordConfirmation" class="form-control">
      </div>
      <div class="row">
          <input type="submit" value="Sign Up" class="btn btn-primary pull-right push-bottom" data-loading-text="Loading...">
      </div>
    </form>
    <p>Already have an account?</p>
    <router-link to="/trainerslogin">Sign in</router-link>
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
        .post("http://localhost:3000/api/trainers", params)
        .then(response => {
          this.$router.push("/trainerslogin");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>