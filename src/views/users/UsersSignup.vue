<template>
  <div class="users-signup">
  
        
            <h1>Sign up</h1>
            
              <li><a href="index.html">Home</a></li>
              <li>Sign up</li>
            </ul>
         
    
           

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

          
            <!-- /REGISTER -->

            

              <h2>Take your first step.</h2>

              

                <h4>There's never been a better time to meet your goals.</h4>

                <p>Once you're registered, you can:</p>
                <ul>
                  <li>Find professional trainers in your area</li>
                  <li>Practice or learn optimum exercises for your goals</li>
                  <li>Achieve maximum results without wasting time</li>
                  <li>Nutrition tracking and planning</li>
                  <li>Connect with the Sparq community</li>
                </ul>

               

                <p>
                  Already have an account?
                   <router-link to="/userslogin">Sign in</router-link>
                </p>
            

          
                <h4>Join the Sparq Team</h4>
                <p>
                  If you're looking to become a Sparq personal trainer <router-link to="/trainerssignup">register here</router-link>.
                </p>
           

            
           

          

       

   
   
  <!-- /WRAPPER -->
    
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