<template>
  <div class="users-edit">
    <!-- WRAPPER -->
    

      
          <h1>Edit Profile</h1>

          
            <li><router-link to="/trainers/me">Profile</router-link></li>
            <li>Edit</li>
          </ul>
        
  

      

        

          
          

            <form id="contactForm" v-on:submit.prevent="submit()">
              
                
                  
                    <label>First Name</label>
                    <input type="text" v-model="firstName" maxlength="100">
                                
                  
                    <label>Last Name</label>
                    <input type="text" v-model="lastName" maxlength="100">
                           
                 
                    <label>Username</label>
                    <input type="text" v-model="username" maxlength="100">
                  
                  
                    <label>E-mail</label>
                    <input type="email" v-model="email" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100">
                  
                
                    <label>Password</label>
                    <input type="password" v-model="password" maxlength="100">
                           
                  <div v-if="password">
                    <label>Password Confirmation</label>
                    <input type="password" v-model="passwordConfirmation" maxlength="100">
                  </div>
                  
                    <label>Level</label>
                    <select v-model="level">
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                
                
            
              
                
                  
                    <label>Profile Picture</label>
                    <input type="file" v-on:change="setFile($event)" ref="fileInput">
                  
       

              

                  <input id="contact_submit" type="submit" value="Save" data-loading-text="Loading...">
                  <button id="trainerdelete" type="button"  v-on:click="deleteUser(user)">Delete Account</button>
              
            </form>
          
        
          <!-- /FORM -->


          <!-- INFO -->
          
             
                <img :src="user.avatar" alt="" />
              
            
          <!-- /INFO -->
        
    
    
   </div>   <!-- /WRAPPER -->

  
</template>

<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        user: [],
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        passwordConfirmation: "",
        level: "",
        email: "",
        avatar: "",
        errors: []
      };
    },
    created: function() {
      axios
        .get("http://localhost:3000/api/users/" + this.$route.params.id)
        .then(response => {
          this.user = response.data;
          this.firstName = response.data.first_name;
          this.lastName = response.data.last_name;
          this.username = response.data.username;
          this.email = response.data.email;
          this.height = response.data.height;
          this.weight = response.data.weight;
          this.level = response.data.level;
          this.avatar = response.data.avatar;
        });
    },
    methods: {
      setFile: function(event) {
        if (event.target.files.length > 0) {
          this.avatar = event.target.files[0];
        }
      },
      submit: function() {
        var formData = new FormData();
          formData.append("first_name", this.firstName);
          formData.append("last_name", this.lastName);
          formData.append("username", this.username);
          formData.append("password", this.password);
          formData.append("password_confirmation", this.password_confirmation);
          formData.append("email", this.email);
          formData.append("avatar", this.avatar);
          formData.append("height", this.height);
          formData.append("level", this.level);
          formData.append("weight", this.weight);
        axios
          .patch("http://localhost:3000/api/users/" + this.$route.params.id, formData)
          .then(response => {
            this.$refs.fileInput.value = "";
            this.$router.push("/users/me");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },
      deleteUser: function(user) {
        axios
          .delete("http://localhost:3000/api/users/" + this.$route.params.id)
          .then(response => {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("jwt");
            localStorage.removeItem("user_id");
            localStorage.removeItem("trainer_id");
            this.$router.push("/");
          });
      }
    }
  };
</script>