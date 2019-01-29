<template>
  <div class="users-edit settings-page">
    <div class="wrapper">
      <div class="page-header page-header-xs settings-background" style="background-image: url('../assets/img/sections/joshua-earles.jpg');">
        <div class="filter"></div>
      </div>
      <div class="profile-content section">
        <div class="container">
          <div class="row">
            <div class="profile-picture">
              <div class="fileinput fileinput-new" data-provides="fileinput">
                <div class="fileinput-new img-no-padding">
                  <img :src="(avatar)" alt="...">
                </div>
                <div class="fileinput-preview fileinput-exists img-no-padding"></div>
                <div>
                  <span class="btn btn-outline-default btn-file btn-round">
                    <span class="fileinput-new">Change Photo</span>
                    <span class="fileinput-exists">Change</span>
                    <input type="file" v-on:change="setFile($event)" ref="fileInput">
                  </span>
                  <br />
                  <a href="#paper-kit" class="btn btn-link btn-danger fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <form class="settings-form" v-on:submit.prevent="submit()">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text" class="form-control border-input" placeholder="First Name" v-model="firstName">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" class="form-control border-input" placeholder="Last Name" v-model="lastName">
                    </div>
                  </div>
                </div>                
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Username</label>
                      <input type="text" class="form-control border-input" placeholder="Username" v-model="username">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control border-input" placeholder="Email" v-model="email">
                    </div>
                  </div>                  
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control border-input" placeholder="" v-model="password">
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6" v-if="password">
                    <div class="form-group">
                      <label>Password Confirmation</label>
                      <input type="password" class="form-control border-input" placeholder="" v-model="passwordConfirmation">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Bio</label>
                  <textarea class="form-control textarea-limited" placeholder="What drives your Sparq?" rows="3" maxlength="150" v-model="bio"></textarea>
                  <h5>
                    <small>
                      <span id="textarea-limited-message" class="pull-right">150 characters left</span>
                    </small>
                  </h5>
                </div>
                <label>Notifications</label>
                <ul class="notifications">
                  <li class="notification-item">
                    Updates regarding platform changes
                    <input type="checkbox" data-toggle="switch" checked="" data-on-color="info" data-off-color="info">
                    <span class="toggle"></span>
                  </li>
                  <li class="notification-item">
                    Updates regarding product changes
                    <input type="checkbox" data-toggle="switch" checked="" data-on-color="info" data-off-color="info">
                    <span class="toggle"></span>
                  </li>
                  <li class="notification-item">
                    Weekly newsletter
                    <input type="checkbox" data-toggle="switch" checked="" data-on-color="info" data-off-color="info">
                    <span class="toggle"></span>
                  </li>
                </ul>
                <div class="text-center">
                  <button id="contact_submit" type="submit" class="btn btn-wd btn-info btn-round">Save</button>
                  <button id="delete" type="button" class="btn btn-danger btn-round" v-on:click="deleteUser(user)">Delete Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- 




        

          
          

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
    <button id="userdelete" type="button"  v-on:click="deleteUser(user)">Delete Account</button>   
    </form>
    <img :src="user.avatar" alt="" /> -->
   </div>

  
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
        bio: "",
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
          this.bio = response.data.bio;
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
          formData.append("bio", this.bio);
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