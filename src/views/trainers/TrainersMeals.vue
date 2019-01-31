<template>
  <div class="trainers-meals">

    <div class="main">
      <div class="section">
        <div class="container">
          <form v-on:submit.prevent="submit()">
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="row">
              <div class="col-md-5 col-sm-5">
                <h6>Meal Image</h6>
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                  <div class="fileinput-new thumbnail img-no-padding" style="max-width: 370px; max-height: 250px;">
                    <img src="/assets/img/image_placeholder.jpg" alt="...">
                  </div>
                  <div class="fileinput-preview fileinput-exists thumbnail img-no-padding" style="max-width: 370px; max-height: 250px;"></div>
                  <div>
                    <span class="btn btn-outline-default btn-round btn-file">
                      <span class="fileinput-new">Select image</span>
                      <span class="fileinput-exists">Change</span>
                      <input type="file" name="...">
                    </span>
                    <a href="#paper-kit" class="btn btn-link btn-danger fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                  </div>
                </div>
                <h6>Meal Type
                  <p>{{mealType}}</p>
                  <span class="icon-danger">*</span>
                </h6>
                <div class="form-group"> 
                   <select v-model="mealType" class="form-control form-control-sm col-md-6">
                     <option v-for="option in options">
                       {{option.type}}
                     </option>
                   </select>
                </div>
                <!-- come back to get radio button to work for meal type -->
              <!--   <div class="form-check-radio" v-for="option in options">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" v-model="mealType"> {{option.type}}
                    <span v-model="mealType" class="form-check-sign"></span>
                  </label>
                </div> -->
              </div>
              <div class="col-md-7 col-sm-7">
                <div class="form-group">
                  <h6>Meal Name
                    <span class="icon-danger">*</span>
                  </h6>
                     <input class="form-control border-input" type="text" v-model="mealName" placeholder="name">
                </div>
                <div class="form-group">
                  <h6>Search Ingredients:
                    <span class="icon-danger">*</span>
                  </h6>
                  <!-- styling is not matching up in this input tag -->
                  <vue-tags-input
                    class="border-input"
                    placeholder="ingredients"
                    v-model="tag"
                    :tags="tags"
                    :autocomplete-items="filteredItems"
                    @tags-changed="newTags => tags = newTags">
                  </vue-tags-input>
                </div>
                <div class="form-group">
                  <h6>Instructions</h6>
                  <textarea v-model="instructions" class="form-control textarea-limited" placeholder="Add Instructions for your meal" rows="13" maxlength="150"></textarea>
                  <h5>
                    <small>
                      <span id="textarea-limited-message" class="pull-right">150 characters left</span>
                    </small>
                  </h5>
                </div>
              </div>
            </div>
            <input type="submit" class="btn btn-danger btn-block btn-round" value="Add Meal">
          </form>
        </div>
      </div>
    </div>

    <!-- create meal start -->
    <div class="add-product sidebar-collapse">
      
      <form v-on:submit.prevent="submit()">
        <h1>Create Meal</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

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
        
        <input type="submit" value="Add Meal">
      </form>
    </div>
    <!-- create meal end -->


    <h2>My Meals</h2>
    <!-- display trainer meals start -->
    <div v-for="meal in meals">
      <h3>{{meal.name}}</h3>
      <h5>Instructions:</h5>
      <p>{{meal.recipe_instructions}}</p>
    </div>
    <!-- display traienr meals end -->
  </div>
</template>

<style>
</style>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueTagsInput from '@johmun/vue-tags-input';
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

      emptyModal: () => {
        this.mealName = "";
        this.tag = "";
        this.instructions = "";
      },

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
