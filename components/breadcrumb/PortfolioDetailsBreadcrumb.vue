<template>
  <section
    class="breadcrumb__area breadcrumb__style-3 breadcrumb__spacing-2 include-bg pt-200 pb-235 grey-bg-4"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-7">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span><a href="#">Business</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>Investment Trend Monitor: Top Trends in 2022 </span>
            </div>
            <h3 class="breadcrumb__title">
              Making the world a more beautiful place.
            </h3>
            <p>
              We are here to help you create the best <br />project out there!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/portfolio/breadcrumb/portfolio-breadcrumb-1.jpg';

export default {
  data () {
    return {bg}
  }
};
</script>
