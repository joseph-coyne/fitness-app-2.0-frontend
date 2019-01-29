<template>

  <div class="users-show">

  <!-- user meals -->
  <div>
    <h1>Welcome: {{user.username}}</h1>
    <h1>{{meals}}</h1>
    
    <h2>Breakfast</h2>
    <select>
      <option v-for="meal in breakfast"><span >{{meal.name}}</span></option>
    </select> 

    <h2>Snack</h2>
    <select>
      <option v-for="meal in snack"><span >{{meal.name}}</span></option>
    </select>

    <h2>Lunch</h2>
    <select>
      <option v-for="meal in lunch"><span >{{meal.name}}</span></option>
    </select>

    <h2>Snack</h2>
    <select>
      <option v-for="meal in snack"><span >{{meal.name}}</span></option>
    </select>

    <h2>Dinner</h2>
    <select>
      <option v-for="meal in dinner"><span >{{meal.name}}</span></option>
    </select> 
  </div>
  <!-- user meals end -->

  <!-- user info -->
  <img :src="user.avatar">              
  <h2>{{ user.name }} </h2> 
  <p> Badge: {{user.badge_name}} </p>
  <p> {{ user.bio }} </p>
  <p> Level: {{user.level}} </p>
  <h4> <!-- <i class="fa fa-phone mr-5 o-4"></i> --> <strong> Progress: {{user.progress}}%</strong></h4>
  <p> <i></i><a>{{user.email}}</a> </p>
  <button> <router-link to="/users/me/edit">Edit</router-link> </button>
 
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
