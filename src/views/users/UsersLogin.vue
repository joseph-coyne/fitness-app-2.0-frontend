<template>
  <div class="users-login">
    <!-- WRAPPER -->
    

      

        <!-- PAGE TITLE -->
        <header id="page-title">
         
            
              <li><a href="index.html">Home</a></li>
              <li>Sign In</li>
            </ul>
          
        </header>


       

          

            <!-- LOGIN -->
            

              <h2>Sign <strong>In</strong></h2>
                <p>{{errors}}</p>
              <form v-on:submit.prevent="submit()">

                <!-- alert failed -->
                <div v-if="errors">
                   
                  Wrong <strong>E-mail Address</strong> or <strong>Password</strong>!
                </div>

                
                  
                    
                      <label>E-mail Address</label>
                      <input type="text" v-model="email">
                    
                
                  
                    
                      <label>Password</label>
                      <input type="password" v-model="password">
                   
                
                      <label for="rememberme">
                        <input type="checkbox" id="rememberme" name="rememberme">Remember Me
                      </label>
                    
                  
                  
                    <input type="submit" value="Sign In" data-loading-text="Loading...">

              </form>

            
            <!-- /LOGIN -->

         


          <p>
            Don't have an account yet? <router-link to="/userssignup">Find your Sparq today!</router-link>
          </p>

       

     
    
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