<template>
  <section
    class="portfolio__area p-relative portfolio__overlay pt-110 pb-90 fix"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Gallery With Slider</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <!-- photography-slider-items -->
          <photography-slider-items />
          <!-- photography-slider-items -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotographySliderItems from "~~/components/portfolios/PhotographySliderItems.vue";
export default {
  components: { PhotographySliderItems },
};
</script>
