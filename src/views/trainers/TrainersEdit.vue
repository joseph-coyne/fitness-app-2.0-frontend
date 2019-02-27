<template>
  <div class="trainers-edit add-product">
    <div class="main">
      <div class="section">
        <div class="container">
          <h3>Edit Profile</h3>
          <form v-on:submit.prevent="submit()">
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
                  <label>Workout Tags</label>
                   <vue-tags-input name="user_tags"
                    v-model="tag"
                    :tags="tags"
                    :autocomplete-items="filteredItems"
                    @tags-changed="newTags => tags = newTags">
                   </vue-tags-input>
                </div>
                <h6>Nutritionist</h6>
                <div class="form-check-radio">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">Yes
                    <span class="form-check-sign"></span>
                  </label>
                </div>
                <div class="form-check-radio">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked>No
                    <span class="form-check-sign"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-7 col-sm-7">
                <div class="row price-row">
                  <div class="col-md-6">
                    <h6>First Name</h6>
                    <div class="input-group border-input">
                      <input type="text" v-model="firstName" placeholder="First Name" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Last Name</h6>
                    <div class="input-group border-input">
                      <input type="text" v-model="lastName" placeholder="Last Name" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Username</h6>
                    <div class="input-group border-input">
                      <input type="text" v-model="username" placeholder="Username" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Email</h6>
                    <div class="input-group border-input">
                      <input type="email" v-model="email" placeholder="Email" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Password</h6>
                    <div class="input-group border-input">
                      <input type="password" v-model="password" placeholder="" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="password">
                    <h6>Password Confirmation</h6>
                    <div class="input-group border-input">
                      <input type="password" v-model="passwordConfirmation" placeholder="" class="form-control border-input">
                      <div class="input-group-append">
                        <span class="input-group-text"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <h6>Bio</h6>
                  <textarea v-model="bio" class="form-control textarea-limited" rows="13" maxlength="150">{{bio}}</textarea>
                  <h5>
                    <small>
                      <span id="textarea-limited-message" class="pull-right">150 characters left</span>
                    </small>
                  </h5>
                </div>
              </div>
            </div>
            <div class="row buttons-row">
              <div class="col-md-3 col-sm-6">
                <button class="btn btn-outline-danger btn-block btn-round">Cancel</button>
              </div>
              <div class="col-md-3 col-sm-6">
                <button class="btn btn-primary btn-block btn-round" type="submit" >Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      <datalist id="tags">
        <option v-for="tag in tags">{{ tag.name }}</option>
      </datalist>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import VueTagsInput from "@johmun/vue-tags-input";
import TrainerService from '../../services/TrainerService';
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
      oldAvatar: "",
      bio: "",
      location: "",
      tag: "",
      tags: [],
      tagNames: [],
      autocompleteItems: [],
      errors: [],
    };
  },
  created: function() {
    TrainerService.getTrainer(this.$route.params.id)
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
        this.oldAvatar = response.data.avatar;
        this.tags = response.data.tag_names,
        this.tagNames = response.data.tag_names
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
      if (this.avatar != this.oldAvatar) {
        formData.append("avatar", this.avatar);
      }

      TrainerService.patchTrainer(this.$route.params.id, formData)
        .then(response => {
          this.$router.push("/trainers/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteTrainer: function(trainer) {
      TrainerService.deleteTrainer(this.$route.params.id)
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
