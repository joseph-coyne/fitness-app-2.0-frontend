<template>
  <div class="leaderboard">
      <div v-for="(user,i) in users"> {{i + 1}}   
      <h2>{{ user.avatar}}</h2>
      <h2>{{ user.username}}</h2>
      <h3>{{ user.calculated_progress}}% </h3>
      <h4>{{ user.badge_name}}</h4>
      
    </div>
    <router-link to="/users/me">Back to my profile</router-link>
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users/")
      .then(response => {
        this.users = response.data;
        console.log(this.users);
      });
  },
  methods: {},
  computed: {}
};
</script>