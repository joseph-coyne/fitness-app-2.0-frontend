
<template>
  <div class="trainers-show">
  	<div>
      <!-- WRAPPER -->
      <div id="wrapper">

        <!-- PAGE TITLE -->
        <header id="page-title">
          <div class="container">
            <button type="button" class="btn btn-default" id="edit" v-if="isTrainer()"><router-link :to="'/trainers/me/edit'">Edit Profile</router-link></button>
            <h1>{{trainer.first_name}} <strong>{{trainer.last_name}}</strong></h1>

            <ul class="breadcrumb">
              <li v-if="isUser()"><router-link to="/trainers">Trainers</router-link></li>
              <li v-else><router-link to="/">Home</router-link></li>
              <li class="active">About Me</li>
            </ul>
          </div>
        </header>

        <section class="container">

          <!-- Who Am I -->

          <article class="row">
            <div class="col-md-6">
              <div class="item-box">
                  <img class="img-responsive" :src="trainer.image_url" width="555" height="311" alt="">
              </div>
              
            </div>
            <div class="col-md-6">
              <h3>Who Am I?</h3>
              <p>{{trainer.bio}}</p>
              <span v-for="tags in trainer.tags" id="tags" class="label label-default">{{tags.name}}</span>

              <hr />

            <div>
              <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Schedule Workout</a>    
            </div>
            
            <div>
              <beautiful-chat
                :participants="participants"
                :titleImageUrl="titleImageUrl"
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
            </div>
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
          </article>
          <!-- /Who Am I -->

          <div class="divider"><!-- divider -->
            <i class="fa fa-star"></i>
          </div>



          <!-- WORK -->
          <section class="container">

            <div class="row">

              <div class="col-md-3"><!-- item 1 -->
                <div class="item-box">
                  <figure>
                    <a class="item-hover" href="adult-athlete-body-414029.jpg">
                      <span class="overlay color2"></span>
                      <span class="inner">
                        <span class="block fa fa-plus fsize20"></span>
                        <strong>View</strong> Image
                      </span>
                    </a>
                    <img class="img-responsive" src="assets/images/demo/portfolio/adult-athlete-body-414029.jpg" width="260" height="260" alt="">
                  </figure>
      
                </div>
              </div>
              <div class="col-md-3"><!-- item 2 -->
                <div class="item-box">
                  <figure>
                    <a class="item-hover lightbox" :href="trainer.video_url" data-plugin-options='{"type":"iframe"}'>
                      <span class="overlay color2"></span>
                      <span class="inner">
                        <span class="block fa fa-plus fsize20"></span>
                        <strong>VIEW</strong> VIDEO
                      </span>
                    </a>
                    <img class="img-responsive" src="assets/images/demo/portfolio/athletes-endurance-energy-685534.jpg" width="260" height="260" alt="">
                  </figure>
        
                </div>
              </div>

              <div class="col-md-3"><!-- item 3 -->
                <div class="item-box">
                  <figure>
                    <a class="item-hover lightbox" href="assets/images/demo/portfolio/active-balance-blond-hair-1117486.jpg" data-plugin-options='{"type":"image"}'>
                      <span class="overlay color2"></span>
                      <span class="inner">
                        <span class="block fa fa-plus fsize20"></span>
                        <strong>View</strong> Image
                      </span>
                    </a>
                    <img class="img-responsive" src="assets/images/demo/portfolio/active-balance-blond-hair-1117486.jpg" width="260" height="260" alt="">
                  </figure>

                </div>
              </div>

              <div class="col-md-3"><!-- item 4 -->
                <div class="item-box">
                  <figure>
                    <a class="item-hover" href="assets/images/demo/portfolio/active-adult-athlete-416778.jpg">
                      <span class="overlay color2"></span>
                      <span class="inner">
                        <span class="block fa fa-plus fsize20"></span>
                        <strong>View</strong> Image
                      </span>
                    </a>
                    <img class="img-responsive" src="assets/images/demo/portfolio/active-adult-athlete-416778.jpg" width="260" height="260" alt="">
                  </figure>
      
                </div>
              </div>

            </div>

          </section>
          <!-- /WORK -->



          <!-- CALLOUT -->
          <section class="container">

            <div v-if="isUser()" class="bs-callout text-center nomargin-bottom">
              <h3>Come on, let's work <strong>together</strong>! <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Schedule Workout</a></h3>
            </div>
          </section>
          <!-- /CALLOUT -->

        </section>


      </div>
      <!-- /WRAPPER -->
    </div>
  </div>
</template>

<style>
div.timepicker-container {
  overflow-x: hidden;
  height: 420px !important;
  width: 200px !important;
}
div.month-container {
  height: auto !important;
}
button.datepicker-day.flex.align-center.justify-content-center.enable {
  flex-grow: 0 !important;
}
button.datepicker-day.flex.align-center.justify-content-center.disabled {
  flex-grow: 0 !important;
}
button.datepicker-day.align-center.justify-content-center {
  flex-grow: 0 !important;
}
#edit {
  align-items: right;
  position: absolute;
  right: 0px;
  margin-top: 15px;
}
#tags {
  margin-right: 5px;
}
button.datepicker-button {
  display: none;
  visibility: hidden;
}
div.datepicker-buttons-container {
  display: none !important;
  visibility: hidden;
}
div.datepicker-buttons-container.flex.justify-content-right.button-validate.flex-fixed {
  display: none !important;
}
div.settime {
  margin-bottom: -120px;
  text-align: center;
}
.setappointment h4 {
  text-align: center;
}
div.h-100.mh-100.numbers-container {
overflow-x: hidden !important;

}
</style>

<script>
import moment from "moment";
import StarRating from 'vue-star-rating'
import axios from "axios";
import Chat from "vue-beautiful-chat";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css';

export default {
  components: {
      VueCtkDateTimePicker,
      StarRating
  },
  data: function() {
    return {
      trainer: {},
      rating: "",
      time: "",
      errors: [],
      participants: [
              {
                id: 'user1',
                name: "",
                imageUrl: ''
              },
              {
                id: 'user2',
                name: 'User',
                imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
              }
            ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
            titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
            messageList: [
                { type: 'text', author: `user1`, data: { text: `Have any questions? Feel free to ask!` } },
            ], // the list of the messages to show, can be paginated and adjusted dynamically
            newMessagesCount: 0,
            isChatOpen: false, // to determine whether the chat window should be open or closed
            showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
            colors: {
              header: {
                bg: '#FF7F50',
                text: '#ffffff'
              },
              launcher: {
                bg: '#FF7F50'
              },
              messageList: {
                bg: '#ffffff'
              },
              sentMessage: {
                bg: '#ffd394',
                text: '#ffffff'
              },
              receivedMessage: {
                bg: '#eaeaea',
                text: '#000000'
              },
              userInput: {
                bg: '#f4f7f9',
                text: '#565867'
              }
            }, // specifies the color scheme for the component
            alwaysScrollToBottom: false // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
    };
  },
  created: function() {
  	axios.get("http://localhost:3000/api/trainers/" + this.$route.params.id)
  	.then(response => {
  		this.trainer = response.data;
      this.rating = response.data.rating
      this.participants[0].name = response.data.first_name
      this.participants[0].imageUrl = response.data.image_url
  	});
  },
  methods: {
    sendMessage (text) {
          if (text.length > 0) {
            this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
            this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
          }
        },
        onMessageWasSent (message) {
          // called when the user sends a message
          this.messageList = [ ...this.messageList, message ]
        },
        openChat () {
          // called when the user clicks on the fab button to open the chat
          this.isChatOpen = true
          this.newMessagesCount = 0
        },
        closeChat () {
          // called when the user clicks on the botton to close the chat
          this.isChatOpen = false
        },
    submit: function() {
      var params = {
        time: this.time,
        trainer_id: this.trainer.id
      }
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
    if(localStorage.getItem("user_id")) {
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
  },
  computed: {},
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY @ h:mm a');
    }
  }
};
</script>