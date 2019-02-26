<template>
  <div id="app">
    <NavBar />    
    
<!--      <router-link to="/trainerslogin">Trainers Login</router-link> |
<router-link to="/usersappointments">User Appointments</router-link> |
<router-link to="/trainersappointments">Trainer Appointments</router-link> |
-->
     
    <router-view/>
    <Footer />
  </div>
</template>

<style>
  .img-circle {
    width: 40px !important;
    height: 40px !important;
    max-width: !important;
  }
</style>
<script>
  import axios from 'axios';
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      NavBar,
      Footer,
    },
      computed: {}
    };
 
</script>
