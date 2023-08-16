<template>
  <section class="portfolio__area portfolio__overlay-9 fix">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8">
          <div class="section__title-wrapper-9 mb-65">
            <span class="section__title-pre-9">Past Projects</span>
            <h3 class="section__title-9">The work I did for client.</h3>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-4 col-md-4">
          <div class="portfolio__more-9 mb-85 text-md-end">
            <nuxt-link href="/portfolio-masonry" class="tp-btn-5">all projects</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xxl-12">
          <!-- personal-port-slider-items -->
          <personal-port-slider-items />
          <!-- personal-port-slider-items -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonalPortSliderItems from "./PersonalPortSliderItems.vue";

export default {
  components: { PersonalPortSliderItems },
};
</script>
