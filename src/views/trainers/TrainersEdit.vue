<template>
  <div class="trainers-edit">
    <div class="main">
      <div class="section">
        <div class="container">
          <h3>Add Product</h3>
          <form>
            <div class="row">
              <div class="col-md-5 col-sm-5">
                <h6>Profile Picture</h6>
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                  <div class="fileinput-new thumbnail img-no-padding" style="max-width: 370px; max-height: 250px;">
                    <img :src="(trainer.avatar)" alt="Profile Picture">
                  </div>
                  <div class="fileinput-preview fileinput-exists thumbnail img-no-padding" style="max-width: 370px; max-height: 250px;"></div>
                  <div>
                    <span class="btn btn-outline-default btn-round btn-file">
                      <span class="fileinput-new">Select image</span>
                      <span class="fileinput-exists">Change</span>
                      <input type="file" name="...">
                    </span>
                    <a href="#paper-kit" class="btn btn-link btn-danger fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                  </div>
                </div>
                <h6>Tags</h6>
                <div id="tags">
                  <input class="tagsinput" data-color="success" type="text" value="" data-role="tags" />
                  <!-- <div class="tagsinput-add"></div> -->
                  <!-- You can change "tag-primary" with with "tag-info", "tag-success", "tag-warning","tag-danger" -->
                </div>p
                <h6>Format
                  <span class="icon-danger">*</span>
                </h6>
                <div class="form-check-radio">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"> Digital
                    <span class="form-check-sign"></span>
                  </label>
                </div>
                <div class="form-check-radio">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked> Print
                    <span class="form-check-sign"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-7 col-sm-7">
                <div class="form-group">
                  <h6>Name
                    <span class="icon-danger">*</span>
                  </h6>
                  <input type="text" class="form-control border-input" placeholder="enter the product name here...">
                </div>
                <div class="form-group">
                  <h6>Tagline
                    <span class="icon-danger">*</span>
                  </h6>
                  <input type="text" class="form-control border-input" placeholder="enter the product tagline here...">
                </div>
                <div class="row price-row">
                  <div class="col-md-6">
                    <h6>Price
                      <span class="icon-danger">*</span>
                    </h6>
                    <div class="input-group border-input">
                      <input type="text" value="" placeholder="enter price" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"><i class="fa fa-euro"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Discount</h6>
                    <div class="input-group border-input">
                      <input type="text" value="" placeholder="enter discount" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <h6>Description</h6>
                  <textarea class="form-control textarea-limited" placeholder="This is a textarea limited to 150 characters." rows="13" maxlength="150"></textarea>
                  <h5>
                    <small>
                      <span id="textarea-limited-message" class="pull-right">150 characters left</span>
                    </small>
                  </h5>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value=""> Display on landing page
                    <span class="form-check-sign"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row buttons-row">
              <div class="col-md-4 col-sm-4">
                <button class="btn btn-outline-danger btn-block btn-round">Cancel</button>
              </div>
              <div class="col-md-4 col-sm-4">
                <button class="btn btn-outline-primary btn-block btn-round">Save</button>
              </div>
              <div class="col-md-4 col-sm-4">
                <button class="btn btn-primary btn-block btn-round">Save & Publish </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      <datalist id="tags">
        <option v-for="tag in tags">{{ tag.name }}</option>
      </datalist>



  <!--     <h1>Edit Profile</h1>

        <form id="contactForm" v-on:submit.prevent="submit()">
          <label>First Name</label>
          <input type="text" v-model="firstName" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="contact_name">
                
          <label>Last Name</label>
          <input type="text" v-model="lastName" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="contact_name">
      
          <label>Username</label>
          <input type="text" v-model="username" maxlength="100" class="form-control" name="contact_name">
              
          <label>E-mail</label>
          <input type="email" v-model="email" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="contact_email" id="contact_email">

          <label>Password</label>
          <input type="password" v-model="password" data-msg-required="Please enter your phone" data-msg-email="Please enter your phone" maxlength="100" class="form-control" name="contact_phone" id="contact_phone">
          
          <label>Password Confirmation</label>
          <input type="password" v-model="passwordConfirmation" data-msg-required="Please enter your phone" data-msg-email="Please enter your phone" maxlength="100" class="form-control" name="contact_phone" id="contact_phone">

          <label>Location</label>
          <input type="text" v-model="location" maxlength="100" class="form-control" name="contact_name">

          <label>Video Url</label>
          <input type="text" v-model="videoUrl" maxlength="100" class="form-control" name="contact_name">

          <label>Profile Picture</label>
          <input type="file" class="form-control" v-on:change="setFile($event)" ref="fileInput">

            <label>Bio</label>
              <textarea maxlength="5000" rows="10" v-model="bio" class="form-control" name="bio" id="contact_message">{{trainer.bio}}</textarea>

                <label>Workout Tags</label>
                 <vue-tags-input name="user_tags"
                  v-model="tag"
                  :tags="tags"
                  :autocomplete-items="filteredItems"
                  @tags-changed="newTags => tags = newTags">
                 </vue-tags-input>

                  <input id="contact_submit" type="submit" value="Save" class="btn btn-primary btn-lg" data-loading-text="Loading...">
                  <button id="trainerdelete" type="button" class="btn btn-danger" v-on:click="deleteTrainer(trainer)">Delete Account</button>
            </form> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import VueTagsInput from "@johmun/vue-tags-input";
export default {
  components: {
    VueTagsInput
  },
  data: function() {
    return {
      trainer: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      videoUrl: "",
      avatar: "",
      bio: "",
      location: "",
      tag: "",
      tags: [],
      autocompleteItems: [],
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/trainers/" + this.$route.params.id)
      .then(response => {
        this.trainer = response.data;
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.username = response.data.username;
        this.email = response.data.email;
        this.bio = response.data.bio;
        this.location = response.data.location;
        this.videoUrl = response.data.video_url;
        this.avatar = response.data.avatar;
        this.tags = response.data.tags.map(a => {
          return { text: a.name, id: a.id };
        });
      });
    axios.get("http://localhost:3000/api/tags/").then(response => {
      this.autocompleteItems = response.data.map(a => {
        return { text: a.name, id: a.id };
      });
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
      formData.append("password_confirmation", this.passwordConfirmation);
      formData.append("email", this.email);
      formData.append("bio", this.bio);
      formData.append("location", this.location);
      formData.append("tags", this.tags.map(a => a.id));
      if (this.avatar) {
        formData.append("avatar", this.avatar);
      }

      axios
        .patch(
          "http://localhost:3000/api/trainers/" + this.$route.params.id,
          formData
        )
        .then(response => {
          this.$router.push("/trainers/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteTrainer: function(trainer) {
      axios
        .delete("http://localhost:3000/api/trainers/" + this.$route.params.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
          localStorage.removeItem("user_id");
          localStorage.removeItem("trainer_id");
          this.$router.push("/");
        });
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i =>
        new RegExp(this.tag, "i").test(i.text)
      );
    }
  }
};
</script>
