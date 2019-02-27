<template>
  <div id="app">
    <NavBar />    
    <router-view/>
    <Footer />
  </div>
</template>

<style>
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
