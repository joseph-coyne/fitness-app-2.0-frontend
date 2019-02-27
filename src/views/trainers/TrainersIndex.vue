
<template>
  <div class="trainers">
		<div class="team-2 section-image">
		  <div class="container">
		    <div class="row">
		      <div class="col-md-4 ml-auto mr-auto text-center">
		        <h2 class="title">Sparq Trainers</h2>
		        <h5 class="description">Find trainers in your area based off your interests.</h5>
						
		        <input type="text" v-model="searchText" placeholder="Search by Tags" list="tags" class="form-control no-border" />
		      </div>
		    </div>
		    <div class="row">
					<TrainerCards v-for="trainer in orderBy(filterBy(trainers, searchText), sortAttribute, sortAscending)" :key="trainer.id" :trainer="trainer"/>
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
	import axios from 'axios'
	import TrainerService from '../../services/TrainerService.js'
	import TrainerCards from '../../components/TrainerCards.vue';
	import Vue2Filters from 'vue2-filters'
	export default {
		mixins: [Vue2Filters.mixin],
		components: {
			TrainerCards,
		},
		data() {
			return {
				trainers: [],
				tags: [],
				searchText: "",
				sortAttribute: "name",
				sortAscending: 1,
				errors: []
			};
		},
		created() {
			TrainerService.getTrainers()
			.then(response => {
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

