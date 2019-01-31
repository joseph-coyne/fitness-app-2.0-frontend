<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container">
        <a class="navbar-brand" href="/">Sparq Fitness</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="isLoggedIn()">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="isUser()">
              <router-link class="nav-link" to="/trainers">Trainers</router-link>
            </li>                             
            <li class="nav-item">
              <router-link v-if="isUser()" class="nav-link" to="/usersappointments">Appointments</router-link>
              <router-link v-if="isTrainer() "class="nav-link" to="/trainersappointments">Appointments</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/meals">My Meals</router-link> 
            </li>
<!--             <li class="nav-item dropdown">
              <a class="btn btn-just-icon btn-warning" data-toggle="dropdown">
                <i class="nc-icon nc-sound-wave"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-right dropdown-notification">
                <li class="no-notification">
                  You're all clear!
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="btn btn-just-icon btn-danger" data-toggle="dropdown">
                <i class="nc-icon nc-email-85"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-right dropdown-wide dropdown-notification">
                <li class="dropdown-header">
                  You have 7 unread notifications
                </li>
                <li>
                  <ul class="dropdown-notification-list scroll-area">
                    <a href="#paper-kit" class="notification-item">
                      <div class="notification-text">
                        <span class="badge badge-pill badge-success"><i class="nc-icon nc-chat-33"></i></span>
                        <span class="message">
                          <b>Patrick</b> mentioned you in a comment.</span>
                        <br />
                        <span class="time">20min ago</span>
                        <button class="btn btn-just-icon read-notification btn-round">
                          <i class="nc-icon nc-check-2"></i>
                        </button>
                      </div>
                    </a>
                    <a href="#paper-kit" class="notification-item">
                      <div class="notification-text">
                        <span class="badge badge-pill badge-info"><i class="nc-icon nc-alert-circle-i"></i></span>
                        <span class="message">Our privacy policy changed!</span>
                        <br />
                        <span class="time">1day ago</span>
                      </div>
                    </a>
                    <a href="#paper-kit" class="notification-item">
                      <div class="notification-text">
                        <span class="badge badge-pill badge-warning"><i class="nc-icon nc-ambulance"></i></span>
                        <span class="message">Please confirm your email address.</span>
                        <br />
                        <span class="time">2days ago</span>
                      </div>
                    </a>
                    <a href="#paper-kit" class="notification-item">
                      <div class="notification-text">
                        <span class="badge badge-pill badge-primary"><i class="nc-icon nc-paper"></i></span>
                        <span class="message">Have you thought about marketing?</span>
                        <br />
                        <span class="time">3days ago</span>
                      </div>
                    </a>
                  </ul>
                </li>

                <li class="dropdown-footer">
                  <ul class="dropdown-footer-menu">
                    <li>
                      <a href="#paper-kit">Mark all as read</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> -->
            <li class="nav-item dropdown" v-if="isUser()">
              <a href="/users/me" class="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30">
                <div class="profile-photo-small">
                  <img :src="(user.avatar)" alt="User Avatar" class="img-circle img-responsive img-no-padding">
                </div>                
              </a>              
              <ul class="dropdown-menu dropdown-menu-right dropdown-danger">
                <div class="dropdown-header">{{user.full_name}}</div>
                <router-link class="dropdown-item" to="/users/me">My Profile</router-link>
<!--                 <a class="dropdown-item" href="#paper-kit">Another action</a>
                <a class="dropdown-item" href="#paper-kit">Something else here</a>
                <a class="dropdown-item" href="#paper-kit">Separated link</a> -->
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/logout" v-if="isLoggedIn()">Logout</router-link>
              </ul>
            </li>            
            <li class="nav-item dropdown" v-if="isTrainer()">
              <a href="/trainers/me" class="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30">
                <div class="profile-photo-small">
                  <img :src="(trainer.avatar)" alt="trainer Avatar" class="img-circle img-responsive img-no-padding">
                </div>                
              </a>              
              <ul class="dropdown-menu dropdown-menu-right dropdown-danger">
                <div class="dropdown-header">{{trainer.full_name}}</div>
                <router-link class="dropdown-item" to="/trainers/me">My Profile</router-link>
                <a class="dropdown-item" href="#paper-kit">Another action</a>
                <a class="dropdown-item" href="#paper-kit">Something else here</a>
                <a class="dropdown-item" href="#paper-kit">Separated link</a>
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/logout" v-if="isLoggedIn()">Logout</router-link>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-else="isLoggedOut()">
          <ul class="navbar-nav ml-auto">
           <li class="nav-item">
              <router-link class="nav-link" to="/userslogin">Sign In</router-link>
           </li>                  
          </ul>
        </div>
      </div>
    </nav>
<!--      <router-link to="/trainerslogin">Trainers Login</router-link> |
<router-link to="/usersappointments">User Appointments</router-link> |
<router-link to="/trainersappointments">Trainer Appointments</router-link> |
-->
     
    <router-view/>
  </div>
</template>

<style>
.img-circle {
  width: 40px !important;
  height: 40px !important;
  max-width: !important;
}
</style>
<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        email: "",
        password: "",
        errors: "",
        user: {},
        trainer: {}
      };
    },
    created: function() {
      if(localStorage.getItem("user_id")) {
        axios.get("http://localhost:3000/api/users/me").then(response => {
          this.user = response.data;
       })
      };
      if(localStorage.getItem("trainer_id")) {
        axios.get("http://localhost:3000/api/trainers/me").then(response => {
          this.trainer = response.data;
        })
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
      },
      isLoggedIn: function() {
        if(localStorage.getItem("jwt")) {
            return true;
          }
          return false;
        },
      isTrainer: function() {
        if(localStorage.getItem("trainer_id")) {
            return true;
          }
          return false;
        },  
      isUser: function() {
        if(localStorage.getItem("user_id")) {
            return true;
          }
          return false;
        },
      },
      computed: {}
    };
</script>
