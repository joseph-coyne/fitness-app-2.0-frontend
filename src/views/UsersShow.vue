<template>

 <div class="users-show">
  <!-- current user info-->
      <h1>{{ profile }}</h1>
      <!-- end current user info -->

      <!-- daily meals template -->
      <!-- add modal for new meal -->
      <div class="container">
        <div class="row">
          <div class="border border-dark col">
            <!-- modal button will be breakfast -->
            <h4>Breakfast</h4>
            <!-- after meal is created it will populate the meal name -->
              <!-- Button trigger modal -->
              <div>{{newMeal.name}}</div>
              <button  type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                Add Meal
              </button>
            <h4>Snack</h4>
              <div>{{newMeal.name}}</div>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                Add Meal
              </button>    
            <h4>Lunch</h4>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                Add Meal
              </button>        
            <h4>Snack</h4>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                Add Meal
              </button>    
            <h4>Dinner</h4>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                Add Meal
              </button>
          </div>
          <!-- nutrient % -->
          <div class="border border-dark col">
           <h4>Macronutrients</h4>
           <p>Protein: </p>
           <p>Carbohydrates: </p>
           <p>Fats: </p>

           <h4>Micronutrients</h4>

           <h5>Total Daily Nutrients: </h5>
          </div>
          <!-- end nutrient % -->
        </div>
      </div>
      <!-- end daily meals template -->


      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Meal</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="meals-new">
                <form v-on:submit.prevent="submit()">
                  <h1>Create Meal</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <label>Meal Name:</label> 
                    <input type="text" class="form-control" v-model="mealName">
                  </div>
                  <div class="form-group">
                    <label>Search Ingredient:</label> 
                    <div>
                        <vue-tags-input
                          v-model="tag"
                          :tags="tags"
                          :autocomplete-items="filteredItems"
                          @tags-changed="newTags => tags = newTags">
                        </vue-tags-input>
                        <p>{{tags}}</p>
                      </div>
                  </div><br>
                  <div class="form-group">
                    <!-- user types directions for creating meal -->
                    <textarea rows="10" cols="50" placeholder="Add Instructions for your meal" class="form-control" v-model="instructions">
                    </textarea>
                  </div>
                  <input type="submit" class="btn btn-primary" value="Add Meal">
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button  type="button" class="btn btn-primary" data-dismiss="modal">Add Meal</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end modal -->
      

      <!-- current user meals -->
      <!-- <div v-for="meal in meals">
        <p>{{meal.name}}</p>
        <p>{{meal.recipe_instructions}}</p>
      </div> -->
      <!-- end current user meals -->

      <!-- meals search -->
      <input type="button" value="My Meals"> 
      <input type="button" value="All Meals">

      <!-- end meals search -->
       
 </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    components: {
      VueTagsInput,
    },

    data: function() {
      return {
        user: {},
        meals: [],
        newMeal: "",
        lastThreeMeals: [],
        // data for new meal
        mealName: "",
        instructions: "",
        errors: [],
        tag: '',
        tags: [],
        autocompleteItems: [],
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
        // this.lastThreeMeals = this.user.meals.slice(this.user.meals.length - 3, this.user.meals.length);
        this.lastThreeMeals = [
          {id: 1, name: "New York Strip and baked potato", recipe_instructions: "Grill steak for 8 minutes on each side make sure it is well done, then bake potato for 45 minutes in oven. Serve and Enjoy", user_id: 3, nutrients: {
            carbohydrates: 26,
            fat: 7,
            folate: 1,
            iron: 1,
            magnesium: 48,
            protein: 28,
            vitamin_d: 0,
            zinc: 4
          }},
          {id: 2, name: "Chicken and rice", recipe_instructions: "grill chicken breast for 5 minutes each side fliping it 2 times, boil water and add rice letting simmer for 15 minutes. Serve and enjoy", user_id: 3, nutrients: {
            carbohydrates: 45,
            fat: 7,
            folate: 2,
            iron: 3,
            magnesium: 34,
            protein: 29,
            vitamin_d: 60,
            zinc: 4
          }},
          {id: 3, name: "Ground Turkey Bowl", recipe_instructions: "Brown the ground turkey add seasoning then cook rice and mix in. Serve and enjoy!", user_id: 3, nutrients: {
            carbohydrates: 45,
            fat: 11,
            folate: 3,
            iron: 1,
            magnesium: 3,
            protein: 20,
            vitamin_d: 85,
            zinc: 4
          }}
        ];
        this.totalNutrients();
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
          ingredients: this.tags.map(a => a.text),
          recipe_instructions: this.instructions,
        };
        axios
          .post("http://localhost:3000/api/meals", params)
          .then(response => {
            this.lastThreeMeals.shift();
            this.lastThreeMeals.push(response.data);
            this.totalNutrients();
            this.mealName = "";
            this.tag = "";
            this.instructions = "";
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      },

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

  
    }
  };
</script>
=======
  <div class="users-show">
    <div class="row">

       <div class="col-md-6 pr-70">

          <div class="team-member">
             <div class="member-photo">
                <img class="img-responsive" :src="user.avatar">
             </div>
          </div>


       </div>

       <div class="col-md-6">
          <h2 class="section-title fw-4 fs-30 mt-60">
             {{ user.name }} </h2>
          
          <p class="primary-color"> Badge:
             {{user.badge_name}}
          </p>

          <div class="exp-separator">
             <div class="exp-separator-inner">
             </div>
          </div>

          <p class="lead fs-22">
             {{ user.bio }}
          </p>

          <p class="lh-26 mb-30">
             Level: {{user.level}}
          </p>

          <h4 class="clearfix mb-0">
             <!-- <i class="fa fa-phone mr-5 o-4"></i> --> <strong> Progress: {{user.progress}}%</strong>
          </h4>

          <p class="clearfix">
             <i class="fa fa-envelope-o mr-10 o-4"></i><a class="b-link fw-5" href="mailto:kevin@example.com">{{user.email}}</a>
          </p>
          <button> <router-link to="/users/me/edit">Edit</router-link> </button>

       </div>

    </div>
    <!-- <div class="container">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.email }}</h2>
      <h3>{{ user.bio }}</h3>
      
      <img v-bind:src="user.avatar">
      <h6>Level: {{user.level}}</h6>
      <h6>Total Progress:  {{user.progress}}%</h6>
      <h6> Badge: {{user.badge_name}}</h6>
 -->
      <!-- <a href="/#/users/me/edit">Edit</a> -->
   


      <!-- <router-link to="/">Back to index</router-link> -->
    </div>
  </div>
</template>
<style>
  body {
    margin-top: 100px;
  }
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/me")
      .then(response => {
        console.log(response.data);
        this.user = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>
