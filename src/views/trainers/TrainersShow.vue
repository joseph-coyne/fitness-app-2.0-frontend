<template>
  <div class="trainers-show product-page">
    <div class="main">
      <div class="section">
        <div class="container">
          <div class="row title-row">
            <div class="col-md-2" v-if="isUser()">
              <a href="/trainersindex"><h4 class="shop">< Trainers</h4></a>
            </div>
            <div class="col-md-4 ml-auto">
              <div class="pull-right" v-if="isTrainer()">
                <router-link :to="'/trainers/me/edit'"><button type="button" class="btn btn-outline-default btn-border btn-round"><i class="nc-icon nc-settings-gear-65"></i> Edit Profile</button></router-link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div id="carousel" class="ml-auto mr-auto">
                <div class="card page-carousel">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <img class="d-block img-fluid" :src="trainer.avatar" alt="Awesome Item">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end carousel -->
            </div>
            <div class="col-md-5 col-sm-6">
              <h2>{{trainer.full_name}}</h2>
              <h4 class="price"><strong></strong></h4>
              <TrainerTags v-for="tag in trainer.tags" id="tags" :key="tag.id":tag="tag"/>
              <!-- <span class="badge badge-pill badge-success" v-for="tags in trainer.tags" id="tags"> {{tags.name}} </span> -->
              <hr />
              <p>{{trainer.bio}}</p>
              <hr />
              <div class="row">
                <div class="col-md-7 offset-md-5 col-sm-8">
                  <button class="btn btn-danger btn-block btn-round" href="#" data-toggle="modal" data-target="#myModal">Schedule Workout &nbsp;<i class="fa fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
    <div class="projects-2 section section-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h6 class="text-muted">Our work</h6>
            <h2 class="title">Some of Our Awesome Products - 2</h2>
            <h5 class="description">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h5>
          </div>
        </div>
        <div class="space-top"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-plain">
              <div class="card-img-top">
                <a href="http://www.creative-tim.com/product/paper-kit">
                  <img class="img" src="/assets/img/sections/opt_pk_thumbnail.jpg" />
                </a>
              </div>
              <div class="card-body">
                <a href="http://www.creative-tim.com/product/paper-kit" target="_blank">
                  <h4 class="card-title">Paper Kit Free</h4>
                </a>
                <h6 class="card-category text-muted">Free Ui kit</h6>
                <p class="card-description">
                  Paper Kit is a free Bootstrap UI kit that can get you going in a new creative direction! To say the least, it's different since it's not material, flat or iOS inspired.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-plain">
              <div class="card-img-top">
                <a href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro">
                  <img class="img" src="/assets/img/sections/opt_lbd_pro_new_thumbnail.jpg" />
                </a>
              </div>
              <div class="card-body">
                <a href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro" target="_blank">
                  <h4 class="card-title">Light Bootstrap Dashboard </h4>
                </a>
                <h6 class="card-category text-muted">Premium template</h6>
                <p class="card-description">
                  Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-plain">
              <div class="card-img-top">
                <a href="https://www.creative-tim.com/product/get-shit-done-pro">
                  <img class="img" src="/assets/img/sections/opt_gsdk_new_thumbnail.jpg" />
                </a>
              </div>
              <div class="card-body">
                <a href="https://www.creative-tim.com/product/get-shit-done-pro" target="_blank">
                  <h4 class="card-title">Get Shit Done Kit Pro</h4>
                </a>
                <h6 class="card-category text-muted">Premium UI kit</h6>
                <p class="card-description">
                  Get Shit Done Kit Pro it's a Bootstrap Kit that comes with a huge number of customisable components. They are pixel perfect, light and easy to use and combine with other elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <beautiful-chat
      :participants="participants"
      :titleavatar="titleavatar"pos
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom" />
    <!-- appointment modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <form v-on:submit.prevent="submit()">
          <div class="modal-header"><!-- modal header -->
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">Schedule Workout Appointment</h4>
          </div><!-- /modal header -->

          <!-- modal body -->
          <div class="modal-body">
            <vue-ctk-date-time-picker
            v-model="time"
            :disabled-dates="['2018-04-03', '2018-04-07', '2018-04-09', '2018-04-11', '2018-04-13', '2018-04-15', '2018-04-17', '2018-04-19']"
            label="Choose date time"
            :enable-button-validate="true"
            color="#FF7F50"
            without-header
            :without-input="true"
            no-weekends-days
            inline
            ></vue-ctk-date-time-picker>
            <hr/>
            <div class="setappointment">
              <h4 v-if=" time == '' ">Select a date:</h4>
              <h4 v-else>{{ time | moment }}</h4>
            </div>
          </div>
          <!-- /modal body -->

          <div class="modal-footer"><!-- modal footer -->
            <button class="btn btn-default" data-dismiss="modal">Cancel</button> 
            <input class="btn btn-primary" type="submit" value="Schedule"></input>
          </div>
        </form>
          <!-- /modal footer -->

        </div>
      </div>
    </div>
    <!-- End Appointment Modal -->
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
import TrainerService from '../../services/TrainerService.js';
import TrainerTags from '../../components/TrainerTags.vue';
import moment from "moment";
import StarRating from "vue-star-rating";
import Chat from "vue-beautiful-chat";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";

export default {
  components: {
    VueCtkDateTimePicker,
    StarRating,
    TrainerTags
  },
  data: function() {
    return {
      trainer: {},
      rating: "",
      time: "",
      errors: [],
      participants: [
        {
          id: "user1",
          name: "",
          avatar: ""
        },
        {
          id: "user2",
          name: "User",
          avatar: "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4"
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `avatar` is supposed to be the user avatar.
      titleavatar:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        {
          type: "text",
          author: `user1`,
          data: { text: `Have any questions? Feel free to ask!` }
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#FF7F50",
          text: "#ffffff"
        },
        launcher: {
          bg: "#FF7F50"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: "#ffd394",
          text: "#ffffff"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#000000"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing.)
    };
  },
  created() {
    TrainerService.getTrainer(this.$route.params.id)
      .then(response => {
        this.trainer = response.data;
        this.rating = response.data.rating;
        this.participants[0].name = response.data.first_name;
        this.participants[0].avatar = response.data.avatar;
      });
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text }
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    submit: function() {
      var params = {
        time: this.time,
        trainer_id: this.trainer.id
      };
      axios
        .post("http://localhost:3000/api/appointments", params)
        .then(response => {
          $("#myModal").modal("hide");
          this.$router.push("/usersappointments");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    isUser: function() {
      if (localStorage.getItem("user_id")) {
        return true;
      }
      return false;
    },
    isTrainer: function() {
      if (localStorage.getItem("trainer_id")) {
        return true;
      }
      return false;
    }
  },
  computed: {},
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY @ h:mm a");
    }
  }
};
</script>
