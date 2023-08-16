<template>
  <section
    class="portfolio__area p-relative black-bg-5 portfolio__overlay pt-110 pb-90 fix"
  >
    <div class="portfolio__shape">
      <img
        class="portfolio__shape-5"
        src="~/assets/img/portfolio/3/portfolio-shape-1.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-5 col-xl-6 col-md-8">
          <div class="section__title-wrapper-3 mb-60">
            <span class="section__title-pre-3">02 . SHOWCASE</span>
            <h3 class="section__title-3 has-gradient">
              Our Most <br />Recent <span> Projects.</span>
            </h3>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-6 col-md-4">
          <div class="portfolio__more text-md-end mb-60">
            <nuxt-link href="/portfolio" class="tp-btn-3 --hover-style-2">
              browse more
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__slider" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <!-- photography-slider-items -->
            <photography-slider-items />
            <!-- photography-slider-items -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotographySliderItems from "./PhotographySliderItems.vue";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { PhotographySliderItems },
};
</script>
