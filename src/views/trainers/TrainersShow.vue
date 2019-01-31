
<template>
  <div class="trainers-show product-page">
    <div class="page-header page-header-xs" style="background-image: url('/assets/img/sections/clark-street-mercantile.jpg');">
      <div class="filter"></div>
    </div>
    <div class="main">
      <div class="section">
        <div class="container">
          <div class="row title-row">
            <div class="col-md-2">
              <a href="/trainersindex"><h4 class="shop">< Trainers</h4></a>
            </div>
            <div class="col-md-4 ml-auto">
              <div class="pull-right">
                <span class="text-muted">Order Status</span>
                <button class="btn btn-link"> <i class="fa fa-shopping-cart"></i> 0 Items</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div id="carousel" class="ml-auto mr-auto">
                <div class="card page-carousel">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <img class="d-block img-fluid" :src="trainer.avatar" alt="Awesome Item">
                        <div class="carousel-caption d-none d-md-block">
                          <p>Somewhere</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/img/jacket-2.jpg" alt="Awesome Item">
                        <div class="carousel-caption d-none d-md-block">
                          <p>Somewhere else</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/img/jacket-3.jpg" alt="Awesome Item">
                        <div class="carousel-caption d-none d-md-block">
                          <p>Here it is</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/img/jacket-4.jpg" alt="Awesome Item">
                        <div class="carousel-caption d-none d-md-block">
                          <p>Here it is</p>
                        </div>
                      </div>
                    </div>
                    <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="fa fa-angle-left"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="fa fa-angle-right"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end carousel -->
            </div>
            <div class="col-md-5 col-sm-6">
              <h2>{{trainer.full_name}}</h2>
              <h4 class="price"><strong></strong></h4>
              <span class="badge badge-pill badge-success" v-for="tags in trainer.tags" id="tags"> {{tags.name}} </span>
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
      </div>
      <div class="section">
        <div class="container">
          <div class="row card-body-row">
            <div class="col-md-4 col-sm-4">
              <div class="info">
                <div class="icon icon-warning">
                  <i class="nc-icon nc-delivery-fast"></i>
                </div>
                <div class="description">
                  <h4 class="info-title"> 2 Days Delivery </h4>
                  <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="nc-icon nc-credit-card"></i>
                </div>
                <div class="description">
                  <h4 class="info-title"> Refundable Policy </h4>
                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="info">
                <div class="icon icon-success">
                  <i class="nc-icon nc-bulb-63"></i>
                </div>
                <div class="description">
                  <h4 class="info-title"> Popular Item </h4>
                  <p>Choose from a veriety of colors resembling sugar paper pastels.</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p>What to find out more about how we build our stuff?
            <a class="link-danger">Learn more.</a>
          </p>
          <hr />
          <div class="faq">
            <h4>Frequently Asked Questions</h4>
            <br/>
            <div id="acordeon">
              <div id="accordion" role="tablist" aria-multiselectable="true">
                <div class="card no-transition">
                  <div class="card-header card-collapse" role="tab" id="headingOne">
                    <h5 class="mb-0 panel-title">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Default Collapsible Item 1
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                  <div class="card-header card-collapse" role="tab" id="headingTwo">
                    <h5 class="mb-0 panel-title">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Default Collapsible Item 2
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                  <div class="card-header card-collapse" role="tab" id="headingThree">
                    <h5 class="mb-0 panel-title">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Default Collapsible Item 3
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
              <!--  end acordeon -->
            </div>
          </div>
          <div class="row add-row">
            <div class="col-md-4 col-sm-4">
              <h4>Complete the Look</h4>
            </div>
            <div class="col-md-4 col-sm-4">
              <h5>Full-Grain Leather Briefcase</h5>
              <p class="price"><strong>&euro; 975.00</strong></p>
              <p>Constructed from robust full-grain leather, it's finished with the label's 'city webbing' - a rich take on the brand's signature stripes.</p>
              <br/>
              <button class="btn btn-danger btn-round"> Add to Cart</button>
            </div>
            <div class="col-md-3 ml-auto col-sm-4">
              <img src="/assets/img/gallery/paul-smith.jpg" alt="Rounded Image" class="img-rounded img-responsive">
            </div>
          </div>
        </div>
      </div>
      <div class="section section-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h4>Similar Products</h4>
              <br/>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="card card-product card-plain">
                <div class="card-image">
                  <a href="#paper-kit">
                    <img src="/assets/img/balmain-1.jpg" alt="Rounded Image" class="img-rounded img-responsive">
                  </a>
                  <div class="card-body">
                    <div class="card-description">
                      <h5 class="card-title">Double Breasted Mini Dress</h5>
                      <p class="card-description">Dresses & Skirts</p>
                    </div>
                    <div class="actions">
                      <h5>1.300 &euro;</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="card card-product card-plain">
                <div class="card-image">
                  <a href="#paper-kit">
                    <img src="/assets/img/balmain-2.jpg" alt="Rounded Image" class="img-rounded img-responsive">
                  </a>
                  <div class="card-body">
                    <div class="card-description">
                      <h5 class="card-title">Chrystal Dress</h5>
                      <p class="card-description">Dresses & Skirts</p>
                    </div>
                    <div class="actions">
                      <h5>1.500 &euro;</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="card card-product card-plain">
                <div class="card-image">
                  <a href="#paper-kit">
                    <img src="/assets/img/balmain-3.jpg" alt="Rounded Image" class="img-rounded img-responsive">
                  </a>
                  <div class="card-body">
                    <div class="card-description">
                      <h5 class="card-title">Chrystal Skirt</h5>
                      <p class="card-description">Only on demand</p>
                    </div>
                    <div class="actions">
                      <h5>1.200 &euro;</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <button type="button" class="btn btn-default" id="edit" v-if="isTrainer()"><router-link :to="'/trainers/me/edit'">Edit Profile</router-link></button>
    <h1>{{trainer.first_name}} <strong>{{trainer.last_name}}</strong></h1>
    <img :src="trainer.avatar" width="555" height="311" alt="">
    <h3>Who Am I?</h3>
    <p>{{trainer.bio}}</p>
    <span v-for="tags in trainer.tags" id="tags">{{tags.name}}</span>
    <br>
    <a href="#" data-toggle="modal" data-target="#myModal">Schedule Workout</a>    
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
import moment from "moment";
import StarRating from "vue-star-rating";
import axios from "axios";
import Chat from "vue-beautiful-chat";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";

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
  created: function() {
    axios
      .get("http://localhost:3000/api/trainers/" + this.$route.params.id)
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
