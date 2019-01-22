<template>
  <div class="meals-index">

    <!-- create meal start -->
    <div>

      <form v-on:submit.prevent="submit()">
        <h1>Create Meal</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
       
        <label>Meal Name:</label> 
        <input type="text" v-model="mealName" placeholder="name">

        <label>Meal Type:</label> 
        <v-select v-model="mealType" label="mealCategory" :options="options"></v-select>
        <p>{{mealType}}</p>
        <!-- <input type="text" v-model="mealType" placeholder="breakfast"> -->
    
        <label>Search Ingredient:</label> 
        <vue-tags-input
          placeholder="ingredients"
          v-model="tag"
          :tags="tags"
          :autocomplete-items="filteredItems"
          @tags-changed="newTags => tags = newTags">
        </vue-tags-input>

        <!-- user types directions for creating meal -->
        <textarea placeholder="Add Instructions for your meal" v-model="instructions">
        </textarea>
        
        <input type="submit" value="Add Meal">
      </form>
    </div>
    <!-- create meal end -->

    <h2>My Meals</h2>
    <!-- display meals start -->
    <div v-for="meal in meals">
      <h3>{{meal.name}}</h3>
      <h5>Instructions:</h5>
      <p>{{meal.recipe_instructions}}</p>
    </div>
    <!-- display meals end -->
  </div>
</template>

<style>
</style>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueTagsInput from '@johmun/vue-tags-input';
  import vSelect from 'vue-select';
  Vue.component('v-select', vSelect);

  export default {

    components: {
      VueTagsInput,
    },

    data: function() {
      return {
        meals: [],
        newMeal: "",
        mealName: "",
        mealType: "",
        instructions: "",
        errors: [],
        tag: '',
        tags: [],
        autocompleteItems: [],
        options: [
          "breakfast",
          "lunch",
          "dinner",
          "snack",
        ]
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/meals").then(response => {
        // console.log(response.data);
        this.meals = response.data;
      });

      // axios request for ingredients data
      axios.get("http://localhost:3000/api/ingredients").then( response => {
        this.autocompleteItems = response.data.map(a => {
          return { text: a.name, id: a.id };
        });
      })
        .catch(error => {
          this.errors = error.response.data.errors;
        });

    },
    methods: {
      submit: function() {
        var params = {
          name: this.mealName,
          meal_type: this.mealType,
          ingredients: this.tags.map(a => a.text),
          recipe_instructions: this.instructions,
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.$router.push("/users/me");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },

      emptyModal: function() {
        this.mealName = "";
        this.tag = "";
        this.instructions = "";
      },

    },
    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
      },

    },
  };
</script>
