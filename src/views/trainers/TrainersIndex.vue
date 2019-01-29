
<template>
  <div class="trainers">
		<div class="team-2 section-image">
		  <div class="container">
		    <div class="row">
		      <div class="col-md-8 ml-auto mr-auto text-center">
		        <h2 class="title">Sparq Trainers</h2>
		        <h5 class="description">Find trainers in your area based off your interests.</h5>
		        <input type="text" v-model="searchText" placeholder="Search by Tags" list="tags" class="form-control no-border" />
		      </div>
		    </div>
		    <div class="row">
		      <div class="col-md-4" v-for="trainer in orderBy(filterBy(trainers, searchText), sortAttribute, sortAscending)" v-bind:key="trainer.id">
		        <div class="card card-profile card-plain">
		          <div class="card-img-top">
		          	<router-link v-bind:to="'/trainers/' + trainer.id">
		              <img class="img" :src="(trainer.avatar)" />
		            </router-link>
		          </div>
		          <div class="card-body">
		            <h4 class="card-title">{{trainer.full_name}}</h4>
		            <h6 class="card-category">{{trainer.location}}</h6>
		            <div class="card-footer">
									<span v-for="tag in trainer.tags" id="tags" v-on:click="searchText = tag.name" class="badge badge-pill badge-danger">{{tag.name}} </span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
 	 	<datalist id="tags">
 			<option v-for="tag in tags">{{ tag.name }}</option>
 	 	</datalist>
	</div>
</template>

<style>
</style>

<script>
	var axios = require("axios");
	import Vue2Filters from 'vue2-filters'
	export default {
		mixins: [Vue2Filters.mixin],
		data: function() {
			return {
				trainers: [],
				tags: [],
				searchText: "",
				sortAttribute: "name",
				sortAscending: 1,
				errors: []
			};
		},
		created: function() {
			axios.get("http://localhost:3000/api/trainers").then(response => {
				console.log(response.data);
				this.trainers = response.data;
			});
			axios.get("http://localhost:3000/api/tags/").then(response => {
			  this.tags = response.data.map(a => {
			    return { name: a.name, id: a.id };
			  });
			});
		},
		methods: {
	  setCurrentTrainer: function(trainer) {
	    this.currentTrainer = Trainer;
		},
		setSortAttribute: function(attribute) {
			if(this.sortAttribute === attribute) {
				this.sortAscending = this.sortAscending * -1;
			} else {
				this.sortAscending = 1;
			}
			this.sortAttribute = attribute;
		}
	},
		computed: {}
	};
</script>

