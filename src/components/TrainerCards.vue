<template>
	<div class="card card-profile">
		<div class="card-img-top">
			<router-link v-bind:to="'/trainers/' + trainer.id">
				<img class="img" :src="(trainer.avatar)" />
			</router-link>
		</div>
		<div class="card-body">
			<h4 class="card-title">{{trainer.full_name}}</h4>
			<h6 class="card-category">{{trainer.location}}</h6>
			<div class="card-footer">
			<TrainerTags v-for="tag in trainer.tags" :key="tag.id" :tag="tag"/>
			</div>
		</div>
	</div>
</template>

<script>
import TrainerTags from './TrainerTags.vue';
export default {
	components: {
		TrainerTags,
	},
	props: {
		trainer: Object
	}
}
</script>

<style scoped>

</style>