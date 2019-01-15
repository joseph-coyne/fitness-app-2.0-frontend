
<template>
  <div class="trainers-show">
  	
        <!-- PAGE TITLE -->
        
          
            <button type="button"  v-if="isTrainer()"><router-link :to="'/trainers/me/edit'">Edit Profile</router-link></button>
            <h1>{{trainer.first_name}} <strong>{{trainer.last_name}}</strong></h1>

            
              <li v-if="isUser()"><router-link to="/trainers">Trainers</router-link></li>
              <li v-else><router-link to="/">Home</router-link></li>
              <li>About Me</li>
            
          

        

          <!-- Who Am I -->

         
                  <img :src="trainer.avatar" width="555" height="311" alt="">
              
            
              <h3>Who Am I?</h3>
              <p>{{trainer.bio}}</p>
              <span v-for="tags in trainer.tags" id="tags">{{tags.name}}</span>

              

            
              <a href="#" data-toggle="modal" data-target="#myModal">Schedule Workout</a>    
            
            
            
              <beautiful-chat
                :participants="participants"
                :titleavatar="titleavatar"
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
           
            
            
                <form v-on:submit.prevent="submit()">
                  
                    <button type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4>Schedule Workout Appointment</h4>
                  

                  <!-- modal body -->
                  
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
                  
                    
                      <h4 v-if=" time == '' ">Select a date:</h4>
                      <h4 v-else>{{ time | moment }}</h4>
                  
                 
                  <!-- /modal body -->

                  
                    <button data-dismiss="modal">Cancel</button> 
                    <input type="submit" value="Schedule"></input>
                  
                </form>
                  <!-- /modal footer -->

               
          
          <!-- /Who Am I -->

          



          <!-- WORK -->
          

            
                  
                    <a href="adult-athlete-body-414029.jpg">
                      
                        <strong>View</strong> Image
                      
                    </a>
                    <img src="assets/images/demo/portfolio/adult-athlete-body-414029.jpg">
                 
      
                
              
                  
                    <a :href="trainer.video_url" data-plugin-options='{"type":"iframe"}'>
                     
                        <strong>VIEW</strong> VIDEO
                      
                    </a>
                    <img src="assets/images/demo/portfolio/athletes-endurance-energy-685534.jpg">
                  
        
                

              
                    <a href="assets/images/demo/portfolio/active-balance-blond-hair-1117486.jpg" data-plugin-options='{"type":"image"}'>
            
                        <strong>View</strong> Image
                      
                    </a>
                    <img src="assets/images/demo/portfolio/active-balance-blond-hair-1117486.jpg" alt="">
                  

               

              
                    <a  href="assets/images/demo/portfolio/active-adult-athlete-416778.jpg">
                        <strong>View</strong> Image
                      
                    </a>
                    <img src="assets/images/demo/portfolio/active-adult-athlete-416778.jpg" alt="">
                  
      
                
          <!-- /WORK -->



          <!-- CALLOUT -->
          
            <div v-if="isUser()">
              <h3>Come on, let's work <strong>together</strong>! <a href="#"  data-toggle="modal" data-target="#myModal">Schedule Workout</a></h3>
            </div>
          
          <!-- /CALLOUT -->

        


      
      <!-- /WRAPPER -->
    
  </div>
</template>

<style>

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
                avatar: ''
              },
              {
                id: 'user2',
                name: 'User',
                avatar: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
              }
            ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `avatar` is supposed to be the user avatar.
            titleavatar: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
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
      this.participants[0].avatar = response.data.avatar
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