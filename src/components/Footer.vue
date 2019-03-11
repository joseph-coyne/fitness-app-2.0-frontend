<template>
  <footer class="footer footer-black footer-big">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 ml-auto mr-auto">
          <div class="logo text-center">
            <h3>Sparq Fitness</h3>
          </div>
        </div>
        <div class="col-md-6 offset-md-2 col-sm-8">
          <div class="links">
            <ul>
              <li>
                <router-link to='/'>Home</router-link>
              </li>
              <li>
                <router-link to='/trainers'>Trainers</router-link>
              </li>
              <li>
                <router-link to='/usersappointments'>Appointments</router-link>
              </li>
              <li>
                <router-link to='/meals'>Meal Plans</router-link>
              </li>
              <li>
                <router-link to='/workouts'>Workout Plans</router-link>
              </li>
              <li>
                <router-link to='/'>Join Sparq!</router-link>
              </li>
            </ul>
            <hr />
            <div class="copyright">
              <div class="pull-left">
                ©2019
              </div>
              <div class="pull-right">
                <ul>
                  <li>
                    <a href="#paper-kit">
                      Terms
                    </a>
                  </li>
                  |
                  <li>
                    <a href="#paper-kit">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>