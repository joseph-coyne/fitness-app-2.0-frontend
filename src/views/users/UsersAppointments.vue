<template>
  <div class="users-appointments search-page">
    <div class="wrapper">
      <div class="main">
        <div class="section section-white section-search">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-12 ml-auto mr-auto text-center">
                <form role="search" class="form-inline search-form">
                  <div class="input-group no-border">
                    <span class="input-group-addon addon-xtreme no-border" id="basic-addon1"><i class="fa fa-search"></i></span>
                    <input type="text" class="form-control input-xtreme no-border" placeholder="Search" aria-describedby="basic-addon1">
                  </div>
                </form>
                <h6 class="text-muted">Appointments</h6>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Trainer</th>
                      <th>Date</th>
                      <th>Focus</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody v-for="appointment in appointments">
                    <tr>
                      <td>{{appointment.trainer_first_name}} {{appointment.trainer_last_name}}</td>
                      <td>{{appointment.time | momentshow }}</td>
                      <td>{{appointment.focus}}</td>
                      <td class="td-actions text-right">
                        <router-link v-bind:to="'/trainers/' + appointment.trainer_id">
                          <button type="button" rel="tooltip" class="btn btn-info btn-sm btn-link">
                            <i class="fa fa-user"></i>
                          </button>
                        </router-link>
                        <button type="button" rel="tooltip" data-toggle="modal" data-target="#appointmentModal" class="btn btn-success btn-sm btn-link" v-on:click="setCurrentAppointment(appointment)">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-link" v-on:click="deleteAppointment(appointment)">
                          <i class="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- appointment show modal -->
    <div class="modal fade bd-example-modal-lg" id="appointmentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title text-center" id="exampleModalLabel">{{currentAppointment.trainer_first_name}} {{currentAppointment.trainer_last_name}}</h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-7 col-sm-6">
                <div id="carousel" class="ml-auto mr-auto">
                  <div class="card page-carousel">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                          <img class="d-block img-fluid" :src="currentAppointment.trainer_avatar" alt="Awesome Item">
                          <div class="carousel-caption d-none d-md-block">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-sm-6">
                <h4><a href="#" data-dismiss="modal" data-toggle="modal" data-target="#calendarModal"><strong class="text-danger">{{currentAppointment.time | momentshow }}</strong></a></h4>
                <h4 class="price">{{currentAppointment.focus}}</h4>
                <hr />
                <p>"{{currentAppointment.info}}"</p>
                <hr />
                <span class="label label-default shipping">Workout difficulty:
                  <star-rating 
                  v-model="currentAppointment.rating"
                  :star-size=25
                  active-color="#FF7F50"
                  read-only
                  :show-rating="false">
                  </star-rating>
                </span>
                <span>Make sure your bring:</span>
                <div v-for="item in currentAppointment.items">
                  <span class="badge badge-danger">{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="left-side">
              <button type="button" class="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
            </div>
            <div class="divider"></div>
            <div class="right-side">
              <button type="button" class="btn btn-danger btn-link">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
       
<!-- end appointment show modal -->

<!-- Appointment Edit Modal -->
  <div class="modal fade" id="calendarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 class="modal-title text-center" id="exampleModalLabel">Edit Appointment Time</h5>
        </div>
        <form v-on:submit.prevent="submit()">   
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
              >
          </vue-ctk-date-time-picker>
          <hr/>
          <div class="settime">
            <h4 v-if=" time == '' ">Select a date:</h4>
            <h4 v-else>{{ time | moment }}</h4>
          </div>
        </div>
        <div class="modal-footer">
          <div class="left-side">
            <button type="button" class="btn btn-danger btn-link" data-dismiss="modal">Never Mind</button>
          </div>
          <div class="divider"></div>
          <div class="right-side">
            <input class="btn btn-success btn-link" type="submit" value="Save Changes"></input>
          </div>
        </div>
       </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import AppointmentService from '../../services/AppointmentService.js'
import moment from "moment";
import VueMoment from "vue-moment";
import StarRating from "vue-star-rating";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";
export default {
  components: {
    VueCtkDateTimePicker,
    StarRating
  },
  data: function() {
    return {
      appointments: [],
      currentAppointment: {},
      rating: 0,
      time: "",
    };
  },
  created: function() {
    AppointmentService.getAppointments()
    .then(response => {
      console.log(response.data);
      this.appointments = response.data;
      this.rating = response.data.rating;
    });
  },
  methods: {
    setCurrentAppointment: function(appointment) {
      this.currentAppointment = appointment;
    },
    submit: function() {
      var params = {
        time: this.time,
        trainer_id: this.currentAppointment.trainer_id
      };
      AppointmentService.patchAppointment(this.currentAppointment.id, params)
      .then(response => {
          this.$router.push("/usersappointments");
          $("#calendarModal").modal("hide");
          
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteAppointment: function(appointment) {
      AppointmentService.deleteAppointment(appointment.id)
        .then(response => {
          // $("#myModal").modal("hide");
          var index = this.appointments.indexOf(appointment);
          this.appointments.splice(index, 1);
        });
    }
  },
  computed: {},
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY @ h:mm a");
    },
    momentshow: function(date) {
      return moment(date).format("dddd, MMMM Do - h:mm a");
    }
  }
};
</script>
