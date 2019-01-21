<template>
  <div class="meals-index">
    <h2>My Meals</h2>
    <div v-for="meal in meals">
      <h3>{{meal.name}}</h3>
      <h5>Instructions:</h5>
      <p>{{meal.recipe_instructions}}</p>
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