<template>

 <div class="users-show">

       <div class="wrap">
           <!-- Main Section -->
           <section id="main">
               <div class="breadcrumb-wrapper">
                   <div class="pattern-overlay">
                       <div class="container">
                           <div class="row">
                               <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                   <h2 class="title">My Page</h2>
                               </div>
                               <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                   <div class="breadcrumbs pull-right">
                                       <ul>
                                           <li>You are Now on:</li>
                                           <li><a href="/">About</a></li>
                                           <li>My Page</li>
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
                         <h1>Welcome {{ user.first_name }}</h1>
                         <button type="button" class="btn btn-color" data-toggle="modal" data-target="#registrationModal">
                             Create a Meal
                           </button>
                         <!-- Contact Box -->
                         <h2>Todays Meals</h2>
                         <div v-for="meal in lastThreeMeals" class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>{{meal.name}}</h3>
                                 <i class="fa fa-cutlery fa-2x"></i>
                             </div>
                         </div>
                       </div>
                       <div class="row">
                         <!-- Contact Box -->
                         <h2>Total Macronutrients</h2>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Protein:</h3>
                                 <h3>{{totalProtein}} g</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Carbs:</h3>
                                 <h3>{{totalCarbohydrates}} g</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Fat:</h3>
                                 <h3>{{totalFat}} g</h3>
                             </div>
                         </div>
                       </div>
                       <div class="row">
                         <!-- Contact Box -->
                         <h2>Total Micronutrients</h2>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Magnesium:</h3>
                                 <h3>{{totalMagnesium}} mg</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Iron:</h3>
                                 <h3>{{totalIron}} mg</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Zinc:</h3>
                                 <h3>{{totalZinc}} mg</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Folate:</h3>
                                 <h3>{{totalFolate}} mcg</h3>
                             </div>
                         </div>
                         <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                             <div class="contact-box widget">
                                 <h3>Vitamin D:</h3>
                                 <h3>{{totalVitaminD}} iu</h3>
                             </div>
                         </div>
                       </div>
                       <!-- /Contact Box -->
                   </div>
               </div>
               <!-- Main Content -->
           </section>
           <!-- /Main Section -->

           <!-- Modal -->
           <section id="modals">
               <!-- Registration Modal -->
               <div class="modal register fade" id="registrationModal" tabindex="-1" role="dialog" aria-labelledby="registrationModal" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                   <div class="modal-content">
                     <div class="modal-body">
                       <div class="meals-new">
                         <form v-on:submit.prevent="submit()">
                           <h1>Create Meal</h1>
                           <ul>
                             <li class="text-danger" v-for="error in errors">{{ error }}</li>
                           </ul>
                           <div class="form-group">
                             <label>Meal Name:</label> 
                             <input type="text" class="form-control" v-model="mealName" placeholder="Meal Name">
                           </div>
                           <div class="form-group">
                             <label>Ingredients:</label> 
                             <div>
                                 <vue-tags-input
                                   v-model="tag"
                                   :tags="tags"
                                   :autocomplete-items="filteredItems"
                                   @tags-changed="newTags => tags = newTags" placeholder="Search Ingredients">
                                 </vue-tags-input>
                               </div>
                           </div><br>
                           <div class="form-group">
                             <!-- user types directions for creating meal -->
                             <textarea rows="10" cols="50" placeholder="Add Instructions for your meal" class="form-control" v-model="instructions">
                             </textarea>
                           </div>
                           <input type="submit" class="btn btn-color" value="Add Meal">
                         </form>
                       </div>
                     </div>
                     <div class="modal-footer">
                       <button v-on:click="emptyModal()" type="button" class="btn btn-color" data-dismiss="modal">Save</button>
                       <button v-on:click="emptyModal()" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
               <!-- /Registration Modal -->
           </section>
           <!-- /Modal -->
           <!-- Scroll To Top --> 
           <a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>
       </div>
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
