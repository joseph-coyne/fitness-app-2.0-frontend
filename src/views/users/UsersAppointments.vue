<template>
  <div class="users-appointments">
    <ul v-for="appointment in appointments">
      <img :src="appointment.trainer_avatar" width="263" height="263" alt="" data-toggle="modal" data-target="#appointmentShow" v-on:click="setCurrentAppointment(appointment)">
      <h4>{{appointment.time | momentshow }}</h4>
      <small >{{appointment.trainer_first_name}} {{appointment.trainer_last_name}}</small>
    </ul>
    
      <!-- appointment show modal -->
    

            <!-- modal header -->
              <button type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4>With {{currentAppointment.trainer_first_name}} {{currentAppointment.trainer_last_name}} </h4>
           

            <!-- modal body -->
            
                    <img :src="currentAppointment.trainer_avatar" alt="">
                  
                  <p>{{currentAppointment.trainer_first_name}} {{currentAppointment.trainer_last_name}} <strong>|</strong> Strength Training</p>
                  <p> {{ currentAppointment.strftime }}</p>
              
                <button type="button"  disabled="disabled">Message</button>
                <button href="#"  data-dismiss="modal" data-toggle="modal" data-target="#myModal">Edit Appointment</button>
                <div>
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
                  </i><span>Make sure your bring:</span>

                  <ul v-for="item in currentAppointment.items">
                    <li>{{item.name}}</li>
                  </ul>
                </div>
            
            <!-- /modal body -->

         
<!-- end appointment show modal -->

<!-----------------------------------Appointment Edit Modal------------------>
    
<!-- modal dialog -->
    <form v-on:submit.prevent="submit()">
      
        
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4>Edit Appointment</h4>
    

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

            <!-- modal footer -->
              <button id="delete" type="button" class="btn btn-danger" v-on:click="deleteAppointment(currentAppointment)">Cancel Appointment</button>  

              <input class="btn btn-primary" type="submit" value="Save Changes"></input>

            
          

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
