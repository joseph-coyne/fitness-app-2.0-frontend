import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import UsersNew from "./views/UsersNew.vue";
import UsersShow from "./views/UsersShow.vue";
import WorkoutsShow from "./views/WorkoutsShow.vue";
import WorkoutsIndex from "./views/WorkoutsIndex.vue";
import UsersEdit from "./views/UsersEdit.vue";
import axios from 'axios';

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/users/new", name: "users-new", component: UsersNew },
    { path: "/users/me", name: "users-show", component: UsersShow },
    { path: "/workouts/daily", name: "workouts-show", component: WorkoutsShow },
    {path: "/workouts", name:"workouts-index", component: WorkoutsIndex},
    {path: "/users/me/edit", name:"users-edit", component: UsersEdit},
    
  ]
});
