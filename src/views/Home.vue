<template>
  <div class="home">
    <!-- WRAPPER -->
    <div id="wrapper">

      <!-- PARALLAX -->
      <section class="parallax delayed" data-stellar-background-ratio="0.7" style="background-image: url('assets/images/demo/banner.jpg');">
        <span class="overlay"></span>

        <div class="container">

          <div class="row">
            <!-- left content -->
            <div class="col-md-7 animation_fade_in">
              <h2>Ignite your <strong>Sparq</strong></h2>
              <p class="lead">
                The start of your journey for a healthier lifestyle starts here.
              </p>
              <p>
                Find a support team and a fitness family you can call home
              </p>

              <a class="btn btn-primary btn-lg"><router-link id="homebutton" to="/userssignup">Signup today!</router-link></a>
            </div>
          </div>
        </div>
      </section>
      <!-- PARALLAX -->



      <div class="container">
        <hr class="half-margins" /><!-- hr line -->
      </div>


      <!-- FEATURED BOXES 3 -->
      <section class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="featured-box nobg border-only">
              <div class="box-content">
                <i class="fa fa-users"></i>
                <h4>Find your Community</h4>
                <p>We're here for you. A platform to help you grow your relationships and tackle your workout together.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-book"></i>
              <h4>New Experiences</h4>
              <p>Learn from professionals in areas you're familar or branch out with something new.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-trophy"></i>
              <h4>Meet your Goals</h4>
              <p>Maintain and exceed realistic goals with support and accountability.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-cogs"></i>
              <h4>Customize your workout</h4>
              <p>A trainer for everything. Numerous workout styles meeting every schedule and location.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /FEATURED BOXES 3 -->


      <div class="container">
        <hr class="no-lines" /><!-- hr line -->
      </div>


      <!-- CALLOUT -->
      <div class="bs-callout margin-top text-center styleBackground noradius">
        <h3>Are you a <strong>Sparq</strong> personal trainer?
        <a class="btn btn-primary btn-lg"><router-link id="homebutton" to="/trainerslogin">Sign in here!</router-link></a></h3>
      </div>
      <!-- /CALLOUT -->





    </div>
    <!-- /WRAPPER -->


  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
