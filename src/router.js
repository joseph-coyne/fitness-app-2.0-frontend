import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MealsIndex from './views/MealsIndex.vue';
import UsersShow from './views/UsersShow.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: "/meals", name: "meals-index", component: MealsIndex },
    { path: "/users/:id", name: "users-show", component: UsersShow }
  ]
});
