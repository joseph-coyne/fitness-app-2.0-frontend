<template>

 <div class="users-show">
  
      <h1>profile page</h1>
      
            <!-- modal button will be breakfast -->
            <h4>Breakfast</h4>
            <!-- after meal is created it will populate the meal name -->
              <!-- Button trigger modal -->
              <div>{{newMeal.name}}</div>
              <button>
                Add Meal
              </button>
            <h4>Snack</h4>
              <div>{{newMeal.name}}</div>
              <button>
                Add Meal
              </button>    
            <h4>Lunch</h4>
              <button>
                Add Meal
              </button>        
            <h4>Snack</h4>
              <button>
                Add Meal
              </button>    
            <h4>Dinner</h4>
              <button>
                Add Meal
              </button>
          
        
           <h4>Macronutrients</h4>
           <p>Protein: </p>
           <p>Carbohydrates: </p>
           <p>Fats: </p>

           <h4>Micronutrients</h4>

           <h5>Total Daily Nutrients: </h5>
         
          
             
                <img :src="user.avatar">
             


      

      
          <h2>
             {{ user.name }} </h2>
          
          <p > Badge:
             {{user.badge_name}}
          </p>

          <p>
             {{ user.bio }}
          </p>

          <p>
             Level: {{user.level}}
          </p>

          <h4>
             <!-- <i class="fa fa-phone mr-5 o-4"></i> --> <strong> Progress: {{user.progress}}%</strong>
          </h4>

          <p>
             <i></i><a>{{user.email}}</a>
          </p>
          <button> <router-link to="/users/me/edit">Edit</router-link> </button>

      


   
      
              <h5>Create Meal</h5>
              <button type="button" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            
              
                <form v-on:submit.prevent="submit()">
                  <h1>Create Meal</h1>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                 
                    <label>Meal Name:</label> 
                    <input type="text" v-model="mealName">
                
                  
                    <label>Search Ingredient:</label> 
                    
                        <vue-tags-input
                          v-model="tag"
                          :tags="tags"
                          :autocomplete-items="filteredItems"
                          @tags-changed="newTags => tags = newTags">
                        </vue-tags-input>
                        <p>{{tags}}</p>
                     
                  
                 
                    <!-- user types directions for creating meal -->
                    <textarea placeholder="Add Instructions for your meal" v-model="instructions">
                    </textarea>
                  
                  <input type="submit" value="Add Meal">
                </form>
              
            
              <button type="button"  data-dismiss="modal">Close</button>
              <button  type="button"  data-dismiss="modal">Add Meal</button>
            
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
        // console.log(response.data);
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
