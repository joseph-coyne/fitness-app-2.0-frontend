import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Logout from "./views/Logout.vue";
import UsersShow from "./views/users/UsersShow.vue";
import UsersEdit from "./views/users/UsersEdit.vue";
import LeaderBoardIndex from "./views/LeaderBoardIndex.vue";
import UsersAppointments from "./views/users/UsersAppointments.vue";
import TrainersIndex from "./views/trainers/TrainersIndex.vue";
import TrainersShow from "./views/trainers/TrainersShow.vue";
import TrainersAppointments from "./views/trainers/TrainersAppointments.vue";
import TrainersSignup from "./views/trainers/TrainersSignup.vue";
import TrainersLogin from "./views/trainers/TrainersLogin.vue";
import TrainersEdit from "./views/trainers/TrainersEdit.vue";
import UsersLogin from "./views/users/UsersLogin.vue";
import UsersSignup from "./views/users/UsersSignup.vue";
import TrainersHome from "./views/trainers/TrainersHome.vue";
import MealsIndex from "./views/MealsIndex.vue";
import WorkoutsShow from "./views/WorkoutsShow.vue";
import WorkoutsIndex from "./views/WorkoutsIndex.vue";
import axios from "axios";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/trainershome",
      name: "trainers-home",
      component: TrainersHome
    },
    {
      path: "/users/:id",
      name: "users-show",
      component: UsersShow
    },
    {
      path: "/users/:id/edit",
      name: "users-edit",
      component: UsersEdit
    },
    {
      path: "/trainers",
      name: "trainers-index",
      component: TrainersIndex
    },
    {
      path: "/leaderboard",
      name: "leaderboard-index",
      component: LeaderBoardIndex
    },
    {
      path: "/trainers/:id",
      name: "trainers-show",
      component: TrainersShow
    },
    {
      path: "/usersappointments",
      name: "users-appointments",
      component: UsersAppointments
    },
    {
      path: "/trainersappointments",
      name: "trainers-appointments",
      component: TrainersAppointments
    },
    {
      path: "/userssignup",
      name: "users-signup",
      component: UsersSignup
    },
    {
      path: "/userslogin",
      name: "users-login",
      component: UsersLogin
    },
    {
      path: "/trainerssignup",
      name: "trainers-signup",
      component: TrainersSignup
    },
    {
      path: "/trainerslogin",
      name: "trainers-login",
      component: TrainersLogin
    },
    {
      path: "/trainers/:id/edit",
      name: "trainers-edit",
      component: TrainersEdit
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },

    {
      path: "/meals",
      name: "meals-index",
      component: MealsIndex
    },
    {
      path: "/workouts/daily",
      name: "workouts-show",
      component: WorkoutsShow
    },
    {
      path: "/workouts",
      name: "workouts-index",
      component: WorkoutsIndex
    }
  ]
});
