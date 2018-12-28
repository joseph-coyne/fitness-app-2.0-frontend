<template>
  <div class="meals-index">
   
        <div class="wrap"> 
            <!-- Main Section -->
            <section id="main">
                <div class="breadcrumb-wrapper">
                    <div class="pattern-overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <h2 class="title">My Meals</h2>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                    <div class="breadcrumbs pull-right">
                                        <ul>
                                            <li>You are Now on:</li>
                                            <li><a href="/users/me">My Page</a></li>
                                            <li>My Meals</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Main Content -->
                <div class="content margin-top60 margin-bottom60">
                    <div class="container">
                      <div class="row">
                        <!-- contact box -->                                
                        <div v-for="meal in meals" class="row">
                            <div class="col-lg-4 ">
                                <div class="contact-box widget">
                                    <h3>{{meal.name}}</h3>
                                    <h5>Instructions:</h5>
                                    <p>{{meal.recipe_instructions}}</p>
                                    <i class="fa fa-cutlery fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <!-- /contact box -->
                      </div>
                    </div>
                </div>
                <!-- /Main Content -->
            </section>
            <!-- /Main Section --> 
            <!-- Scroll To Top --> 
            <a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>
        </div>
        <!-- Wrap End -->
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        meals: []
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/meals").then(response => {
        // console.log(response.data);
        this.meals = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>