<template>
  <div class="trainers-meals">

    <!-- create meal start -->
    <div>
      <!-- users associated with trainer -->
      <!-- <p v-for="client in clientNames(this.clients, 'id')"><span v-on:click="userId = client.id">{{client.full_name}}</span></p> -->

           
      <!-- <input type="text" v-model="userId" > -->
      <form v-on:submit.prevent="submit()">
        <h1>Create Meal</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <!-- filter user -->
        <!-- <input type="text" name="k" id="k" v-model="searchText" list="tags" placeholder="Search by Tags"> -->
        <!-- /search form -->
        <!-- <ul>
          <li v-for="trainer in orderBy(filterBy(trainers, searchText), sortAttribute, sortAscending)" v-bind:key="trainer.id">
            <router-link v-bind:to="'/trainers/' + trainer.id"><img :src="(trainer.avatar)" width="263" height="395" alt=""></router-link>
            <h4>{{trainer.first_name}} {{trainer.last_name}}</h4>
            <p>{{trainer.location}}</p>

            use this line to set v-model userId = client.id and to display client.full_name
            <span v-for="tag in trainer.tags" id="tags" v-on:click="searchText = tag.name">{{tag.name}}</span>
          </li>
        </ul> -->
        <!-- filter user end -->
       
        <label>Meal Name:</label> 
        <input type="text" v-model="mealName" placeholder="name">
        <p>{{mealName}}</p>

        <label>Meal Type:</label> 
        <select v-model="mealType">
          <option v-for="option in options">
            {{option.type}}
          </option>
        </select>
    
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

        <label>Select Client</label> 
        <select v-model="userId">
          <option v-for="client in clientNames(this.clients, 'id')" v-bind:value="client.id">
            {{client.full_name}}
          </option>
        </select>



        <p>{{userId}}</p> 
        
        <input type="submit" value="Add Meal">
      </form>
    </div>
    <!-- create meal end -->

<!-- use vue-select to allow traienr to go through meals and select already made meal to send to client -->
    <h2>My Meals</h2>
    <p>{{meals}}</p>
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
  import Vue2Filters from 'vue2-filters';

  export default {

    components: {
      VueTagsInput,
    },
    mixins: [Vue2Filters.mixin],
    data: function() {
      return {
        clients: [],
        trainer: {},
        meals: [],
        newMeal: "",
        mealName: "",
        mealType: "",
        searchText: "",
        instructions: "",
        client: "",
        userId: "",
        errors: [],
        tag: '',
        tags: [],
        autocompleteItems: [],
        options: [
          {type: "breakfast"},
          {type: "lunch"},
          {type: "dinner"},
          {type: "snack"}
        ]
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/meals").then(response => {
        this.meals = response.data;
      });

      axios.get("http://localhost:3000/api/trainers/me").then(response => {
        this.trainer = response.data;
        this.clients = this.trainer.users;
        console.log("trainer", this.trainer);

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
          user_id: this.userId,
          trainer_id: this.trainer.id
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.$router.push("/trainers/me");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },

      // emptyModal: () => {
      //   this.mealName = "";
      //   this.tag = "";
      //   this.instructions = "";
      // },

      clientNames(clients, id) {

        return clients.filter((client, position, user) => {
          return user.map(mapUser => mapUser[id]).indexOf(client[id]) === position;
        });

      },

    },
    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
      },

   

    },
  };
</script>