<template>
  <div class="meals-index search-page">

    <div class="wrapper">
      <div class="main">
        <div class="section section-white section-search">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-6 col-12 ml-auto mr-auto text-center">
                <button type="button" class="btn btn-danger btn-round text-center" data-toggle="modal" data-target="#mealModal">
                    Create Meal
                </button><br><br>
                <h6 class="text-muted">My Meals</h6>
                <ul class="list-unstyled follows text-center">
                  <li v-for="meal in meals">
                    <div class="row">
                      <div class="col-md-12 col-4 description text-center">
                        <h5><strong>{{meal.name}}</strong></h5>
                      </div>
                    </div>
                  </li>
                  <!-- come back to build dropdown for ingredients -->
                  <!-- <li v-for="meal in meals"> -->
                    <!-- <div class="row"> -->
                      <!-- <div class="col-md-2 col-3"> -->
                        <!-- <img src="/assets/img/faces/ayo-ogunseinde-2.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive"> -->
                      <!-- </div> -->

                     <!--  <div class="col-md-12 col-6 description text-center">

                        <div id="accordion" role="tablist" aria-multiselectable="true" v-for="meal in meals" class="{activeclass: isActive}">
                            <div class="card no-transition">
                                <div class="card-header card-collapse" role="tab" id="headingOne" >
                                    <h5 class="mb-0 panel-title">
                                        <a class="collapsed meal-name" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            {{meal.name}}
                                            <i class="nc-icon nc-minimal-down"></i>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" v-show="isActive(meal)">
                                    <div class="card-body">
                                       <strong>Instructions:</strong><br> {{meal.recipe_instructions}}
                                    </div>
                                </div>
                              </div>
                            </div> -->


                      <!--   <h5><strong>{{meal.name}}</strong>
                          <br>
                          <small>Instructions:
                            {{meal.recipe_instructions}}</small>
                        </h5> -->
                        
                     <!--  </div>
                    </div> -->
                  <!-- </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- modal meal create start -->
    <div class="modal fade" id="mealModal" tabindex="-1" role="dialog" aria-hidden="false">
        <div class="modal-dialog modal-register">
            <div class="modal-content">
                <div class="modal-header no-border-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="text-muted text-center">Create Meal</h6>
                    <h3 class="modal-title text-center">Keep Track</h3>
                    <p>of your daily meals</p>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="submit()">
                      <ul>
                        <li v-for="error in errors">{{ error }}</li>
                      </ul>
                     
                      <!-- meal name -->
                     <div class="form-group">
                        <label>Meal Name:</label><br>
                        <input class="col-md-6" type="text" v-model="mealName" placeholder="name">
                     </div>


                     <!-- meal type -->
                     <div class="form-group">
                         <label>Meal Type:</label> 
                        <select v-model="mealType" class="form-control form-control-sm col-md-6">
                          <option v-for="option in options">
                            {{option.type}}
                          </option>
                        </select>
                     </div>

                     <!-- ingredient tags -->
                     <div class="form-group">
                        <label>Search Ingredient:</label> 
                        <vue-tags-input
                          placeholder="ingredients"
                          v-model="tag"
                          :tags="tags"
                          :autocomplete-items="filteredItems"
                          @tags-changed="newTags => tags = newTags">
                        </vue-tags-input>
                     </div>

                     <!-- recipe instructions -->
                     <div class="form-group">
                        <label>Instructions:</label>
                        <textarea cols="54" placeholder="Add Instructions for your meal" v-model="instructions">
                        </textarea>
                     </div>

                      <!--submit button  -->
                      <input type="submit" class="btn btn-danger btn-block btn-round" value="Add Meal">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- modal meal create end -->
  </div>
</template>

<style>
</style>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueTagsInput from '@johmun/vue-tags-input';
  

  export default {
    
    components: {
      VueTagsInput,
    },

    // to toggle meal in meals
    // Vue.component('toggle-list-meal' {
    //   template: '#list-meal',
    //   props: ['meal'],
    //   methods: {
    //     toggle() {
    //       this.isActive = !this.isActive;
    //     }
    //   },
    // data() {
    //   return {
    //     isActive: false
    //   }
    // })

    data: function() {
      return {
        user: {},
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
          {type: "breakfast"},
          {type: "lunch"},
          {type: "dinner"},
          {type: "snack"}
        ]
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/users/me").then(response => {
        console.log(response.data);
        this.user = response.data;
      });

      axios.get("http://localhost:3000/api/meals").then(response => {
        console.log(response.data);
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
          user_id: this.user.id
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.$router.push("/users/me");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });

          this.mealName = "";
          this.tag = "";
          this.instructions = "";
          this.mealType = "";
      },

    },
    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text));
      },

    },
  };
</script>
