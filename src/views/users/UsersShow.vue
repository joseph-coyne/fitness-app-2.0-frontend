<template>
  <div class="users-show">
    <!-- WRAPPER -->
    <div id="wrapper">

      <!-- PAGE TITLE -->
      <header id="page-title">
        <div class="container">
          <button type="button" class="btn btn-default" id="edit" v-if="isUser()"><router-link :to="'/users/me/edit'">Edit Profile</router-link></button>
          <h1>About <strong>Me</strong></h1>

          <ul class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li class="active">About Me</li>
          </ul>
        </div>
      </header>


      <section class="container">

        <!-- Who Am I -->
        <article class="row">
          <div class="col-md-6">
            <div class="item-box">
                <img class="img-responsive" :src="user.image_url" width="555" height="311" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <h3>{{user.first_name }} {{ user.last_name }}</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <hr />

            <ul class="list-icon">
              <li>I'm here to: </li>
              <li>Kick ass</li>
              <li>Check bubblegum</li>
            </ul>

          </div>
        </article>
        <!-- /Who Am I -->



        <!-- SKILLS -->
   <!--      <div class="row">

          <div class="col-xs-6 col-md-3">
            <div class="text-center">
              <div class="circular-bar">
                <input class="knob" data-linecap="round" data-bgColor="#FAFAFA" data-fgColor="#F07057" data-thickness=".06" value="87" data-readOnly="true" data-displayInput="false">
                <div class="circular-bar-content">
                  <strong>Target Weight</strong>
                  <label>91%</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="text-center">
              <div class="circular-bar">
                <input class="knob" data-linecap="round" data-bgColor="#FAFAFA" data-fgColor="#F07057" data-thickness=".06" value="93" data-readOnly="true" data-displayInput="false">
                <div class="circular-bar-content">
                  <strong>C</strong>
                  <label>93%</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-md-3">
            <div class="text-center">
              <div class="circular-bar">
                <input class="knob" data-linecap="round" data-bgColor="#FAFAFA" data-fgColor="#F07057" data-thickness=".06" value="73" data-readOnly="true" data-displayInput="false">
                <div class="circular-bar-content">
                  <strong>WORDPRESS</strong>
                  <label>73%</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="text-center">
              <div class="circular-bar">
                <input class="knob" data-linecap="round" data-bgColor="#FAFAFA" data-fgColor="#F07057" data-thickness=".06" value="61" data-readOnly="true" data-displayInput="false">
                <div class="circular-bar-content">
                  <strong>PHOTOSHOP</strong>
                  <label>61%</label>
                </div>
              </div>
            </div>
          </div>

        </div> -->
        <!-- /SKILLS -->









      </section>


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
      user: {}
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });

    // axios.post("http://localhost:3000/api/users", params).then(response => {
    //   this.$router.push("/");
    // }).catch(error => {
    //   this.errors = error.response.data.errors;
    // });
  },
  methods: {
    submit: function() {
      var params = {
        time: this.time
      };
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
