<template>
  <div class="users-signup">
    <h1>Sign up</h1>
      <h2>Create <strong>Account</strong></h2>

      <form v-on:submit.prevent="submit()">
        <!-- alert failed -->
        <div  v-if="errors == 'Password confirmation doesn\'t match Password'">
          <strong>Passwords</strong> do not match!
        </div>                
        <div v-else-if="errors == 'Password can\'t be blank'">
         
        <strong>Password</strong> is blank!
        </div>
  
        <label>E-mail Address</label>
        <input type="text" v-model="email">

        <label>Password</label>
        <input type="password" v-model="password">
     
        <label>Re-enter Password</label>
        <input type="password" v-model="passwordConfirmation">
      
        <input type="submit" value="Sign Up" data-loading-text="Loading...">

      </form>
      <p>
        Already have an account?
         <router-link to="/userslogin">Sign in</router-link>
      </p>
      <h4>Join the Sparq Team</h4>
      <p>
        If you're looking to become a Sparq personal trainer <router-link to="/trainerssignup">register here</router-link>.
      </p>
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