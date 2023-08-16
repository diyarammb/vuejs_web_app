<template>
  <section class="portfolio_area pt-110 black-bg-13">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-6 col-lg-8 col-md-7">
          <div class="section__title-wrapper-8 mb-60">
            <span class="section__title-pre-8">Our projects</span>
            <h3 class="section__title-8">
              latest
              <span class="section__title-highlight-8"
                >projects
                <svg
                  width="206"
                  height="24"
                  viewBox="0 0 206 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="wow"
                    d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505"
                    stroke="#FF5A1B"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 col-md-5">
          <div class="portfolio__more-8 text-md-end mb-70">
            <nuxt-link href="/portfolio" class="tp-btn-border-7">
              View all Projects 
              <i class="fa-regular fa-chevron-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xxl-12">
          <!-- architecture-port-slider-items -->
          <architecture-port-slider-items />
          <!-- architecture-port-slider-items -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArchitecturePortSliderItems from "./ArchitecturePortSliderItems.vue";

export default {
  components: { ArchitecturePortSliderItems },
};
</script>
