<template>
  <div class="trainers-home">
    <h1>Trainer Portal</h1>
		<ul v-if="isTrainer()"><router-link to="/trainersappointments">Appointments</router-link></ul>
    <ul v-else><router-link to="/trainerssignup">Signup</router-link></ul>
		<ul v-if="isTrainer()"><router-link to="/trainers/me">Profile</router-link></ul>
		<ul v-else><router-link to="/trainerslogin">Login</router-link></ul>

  </div>
</template>

</style>

<script>
export default {
  data: function() {
    return {
    };
  },
  created: function() {},
  methods: {
  	isTrainer: function() {
  	  if(localStorage.getItem("trainer_id")) {
  	      return true;
  	    }
  	    return false;
  	  },  
  },
  computed: {}
};
</script>
