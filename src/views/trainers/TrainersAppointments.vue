<template>
  <div class="trainers-appointments">
    <ul v-for="appointment in appointments">
      <img class="img-responsive" :src="appointment.user_avatar" width="263" height="263" alt="" data-toggle="modal" data-target="#myModal" v-on:click="setCurrentAppointment(appointment)">
      <h4>{{appointment.time | momentshow }}</h4>
      <small>{{appointment.user_name}}</small>
    </ul>

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
            Should they bring anything?:
            <vue-tags-input
              v-model="tag"
              :tags="tags"
              @tags-changed="newTags => tags = newTags"
              placeholder="what to bring:">
            </vue-tags-input>
            <br>
            Any preparation advice you want to share?:
            <textarea rows="4" class="form-control" v-model="info"></textarea>
            <br>
            How difficult will this workout be?
            <star-rating 
            v-model="rating"
            star-size="25"
            active-color="#FF7F50"
            :show-rating="false">
            </star-rating>
          </div>

          <!-- /modal body -->

          <div class="modal-footer"><!-- modal footer -->
            <button type="button" class="btn btn-primary" disabled="disabled">Message</button>
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
import VueTagsInput from "@johmun/vue-tags-input";
import StarRating from "vue-star-rating";
export default {
  components: {
    VueTagsInput,
    StarRating
  },
  data: function() {
    return {
      message: "Appointments",
      time: "",
      rating: "0",
      info: "",
      tag: "",
      tags: [],
      appointments: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/appointments").then(response => {
      console.log(response.data);
      this.appointments = response.data;
      console.log(this.appointments);
      this.rating = response.data.rating;
      this.info = response.data.info;
    });
  },
  methods: {
    setCurrentAppointment: function(appointment) {
      this.currentAppointment = appointment;
    },
    submit: function() {
      var params = {
        rating: this.rating,
        info: this.info,
        items: this.tags.map(a => a.text)
      };
      axios
        .patch(
          "http://localhost:3000/api/appointments/" +
            this.currentAppointment.id,
          params
        )
        .then(response => {
          $("#myModal").modal("hide");
          this.$router.push("/trainersappointments");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {},
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY @ h:mm a");
    },
    momentshow: function(date) {
      return moment(date).format(" ddd, MMM Do @ h:mm a");
    }
  }
};
</script>
