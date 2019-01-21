
<template>
  <div class="trainers">
		<!-- search form -->
		<input type="text" name="k" id="k" v-model="searchText" list="tags" placeholder="Search by Tags">
		<!-- /search form -->
		<ul>
			<li v-for="trainer in orderBy(filterBy(trainers, searchText), sortAttribute, sortAscending)" v-bind:key="trainer.id">
				<router-link v-bind:to="'/trainers/' + trainer.id"><img :src="(trainer.avatar)" width="263" height="395" alt=""></router-link>
				<h4>{{trainer.first_name}} {{trainer.last_name}}</h4>
				<p>{{trainer.location}}</p>
				<span v-for="tag in trainer.tags" id="tags" v-on:click="searchText = tag.name">{{tag.name}}</span>
			</li>
		</ul>
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

