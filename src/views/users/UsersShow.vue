<template>
  <div class="users-show">
    <div class="wrapper">
      <div class="profile-content section">
        <div class="container">
          <div class="row">
            <div class="profile-picture">
              <div class="fileinput fileinput-new" data-provides="fileinput">
                <div class="fileinput-new img-no-padding">
                  <img :src="user.avatar" alt="...">
                </div>
                <div class="name">
                  <h4 class="title text-center">{{user.full_name}}
                    <br />
                    <!-- <small>Music Producer</small> -->
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <p>{{user.bio}}</p>
              <br />
              <router-link :to="'/userss/me/edit'"><button type="button" class="btn btn-outline-default btn-border btn-round"><i class="fa fa-cog"></i> Edit Profile</button></router-link>
            </div>
          </div>
          <br/>
          <!-- Tab panes -->
        </div>
      </div>
    </div>
 </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        user: {},
        meals: [],
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0,
        totalMagnesium: 0,
        totalZinc: 0,
        totalIron: 0,
        totalFolate: 0,
        totalVitaminD: 0
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/users/me").then(response => {
        console.log(response.data);
        this.user = response.data;
        console.log("meals", this.user.meals);
      });

      axios.get("http://localhost:3000/api/meals").then(response => {
        this.meals = response.data;
        this.meals.forEach((meal) => {
          const breakfastType = meal.meal_type === "breakfast";
          const lunchType = meal.meal_type === "lunch";
          const dinnerType = meal.meal_type === "dinner";
          const snackType = meal.meal_type === "snack";

          if (breakfastType) {
            this.breakfast.push(meal);
          } else if (lunchType) {
            this.lunch.push(meal);
          } else if (dinnerType) {
            this.dinner.push(meal);
          } else if (snackType) {
            this.snack.push(meal);
          }
        });
        
      });
    },

    methods: {

      totalNutrients: function() {
        
        this.totalProtein = 0;
        this.totalCarbohydrates = 0;
        this.totalFat = 0;
        this.totalMagnesium = 0;
        this.totalZinc = 0;
        this.totalIron = 0;
        this.totalFolate = 0;
        this.totalVitaminD = 0;

        this.lastThreeMeals.forEach(function(meal) {
          this.totalProtein += meal.nutrients["protein"];
          this.totalCarbohydrates += meal.nutrients["carbohydrates"];
          this.totalFat += meal.nutrients["fat"];
          this.totalMagnesium += meal.nutrients["magnesium"];
          this.totalZinc += meal.nutrients["zinc"];
          this.totalIron += meal.nutrients["iron"];
          this.totalFolate += meal.nutrients["folate"];
          this.totalVitaminD += meal.nutrients["vitamin_d"];
        }.bind(this));
      },
    },

    computed: {}
  };
</script>
