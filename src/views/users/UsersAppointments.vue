<template>
  <div class="users-appointments">

    <section class="container">

      <header id="page-title">
        <div class="container">
          <h1>Your <strong>appointments</strong></h1>

          <ul class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li class="active">Appointments</li>
          </ul>
        </div>
      </header>

<!--       <ul class="nav nav-pills isotope-filter isotope-filter" data-sort-id="isotope-list" data-option-key="filter">
        <li data-option-value="*" class="active"><a href="#">Show All</a></li>
        <li data-option-value=".ceo"><a href="#">CEO</a></li>
        <li data-option-value=".marketing"><a href="#">Marketing</a></li>
        <li data-option-value=".design"><a href="#">Design</a></li>
      </ul> -->


      <div class="row">

        <ul class="sort-destination isotope" data-sort-id="isotope-list" v-for="appointment in appointments">

          <li class="isotope-item col-md-3 ceo" ><!-- item 1 -->
            <div class="item-box fixed-box">
              <figure>
                <img class="img-responsive" :src="appointment.trainer_image" width="263" height="263" alt="" data-toggle="modal" data-target="#appointmentShow" v-on:click="setCurrentAppointment(appointment)">
              </figure>
              <div id="appointment-item" class="item-box-desc">
                <h4>{{appointment.time | momentshow }}</h4>
                <small class="styleColor">{{appointment.trainer_first_name}} {{appointment.trainer_last_name}}</small>
                <div class="text-center">
                </div>
              </div>
            </div>
          </li>

        </ul>

      </div><!-- /.masonry-container -->



    </section>
      
<!-- appointment show modal -->
      <div class="modal fade" id="appointmentShow" tabindex="-1" role="dialog" aria-labelledby="appointmentShowLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">

            <div class="modal-header"><!-- modal header -->
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="appointmentShowLabel">With {{currentAppointment.trainer_first_name}} {{currentAppointment.trainer_last_name}} </h4>
            </div><!-- /modal header -->

            <!-- modal body -->
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <figure class="item-box">
                    <img class="img-responsive" :src="currentAppointment.trainer_image" alt="">
                  </figure>
                  <p class="when">{{currentAppointment.trainer_first_name}} {{currentAppointment.trainer_last_name}} <strong>|</strong> Strength Training</p>
                  <p class="when"> {{ currentAppointment.strftime }}</p>
                  <div class="buttons">
                    <button type="button" class="btn btn-primary" disabled="disabled">Message</button>
                    <button href="#" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#myModal">Edit Appointment</button>
                  </div>
                </div>
                <div class="col-md-6 info">
                  <h3>Trainer Notes:</h3>
                  <blockquote> {{currentAppointment.info}}</blockquote>
                  Today's workout difficult:
                  <star-rating 
                  v-model="currentAppointment.rating"
                  star-size="25"
                  active-color="#FF7F50"
                  read-only
                  :show-rating="false">
                  </star-rating>
                  </i><span class="text-danger">Make sure your bring:</span>

                  <ul class="list-icon check" v-for="item in currentAppointment.items">
                    <li>{{item.name}}</li>
                  </ul>
                </div>
            </div>
            <!-- /modal body -->

          </div>
        </div>
      </div>
<!-- end appointment show modal -->

<!-----------------------------------Appointment Edit Modal------------------>
    </div>
<!-- modal dialog -->
    <form v-on:submit.prevent="submit()">
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">

          <div class="modal-content modal-lg">

            <div class="modal-header"><!-- modal header -->

              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">Edit Appointment</h4>
            </div><!-- /modal header -->

            <!-- modal body -->
            <div id="editmodal" class="modal-body">
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
              <div class="settime">
                <h4 v-if=" time == '' ">Select a date:</h4>
                <h4 v-else>{{ time | moment }}</h4>
              </div>

            </div>

            <!-- /modal body -->

            <div class="modal-footer"><!-- modal footer -->
              <button id="delete" type="button" class="btn btn-danger" v-on:click="deleteAppointment(currentAppointment)">Cancel Appointment</button>  

              <input class="btn btn-primary" type="submit" value="Save Changes"></input>

            </div><!-- /modal footer -->
          

          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
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
      message: "Appointments",
      appointments: [],
      currentAppointment: [],
      rating: "",
      time: this.time
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/appointments").then(response => {
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
      axios
        .patch(
          "http://localhost:3000/api/appointments/" +
            this.currentAppointment.id,
          params
        )
        .then(response => {
          $("#myModal").modal("hide");
          this.$router.push("#showAppointment");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteAppointment: function(appointment) {
      axios
        .delete(
          "http://localhost:3000/api/appointments/" + this.currentAppointment.id
        )
        .then(response => {
          $("#myModal").modal("hide");
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
      return moment(date).format("ddd, MMM Do @ h:mm a");
    }
  }
};
</script>
