<template>
  <section
    class="portfolio__area portfolio__overlay-5 pt-60 pb-120 p-relative z-index-1"
  >
    <div class="container-fluid g-0">
      <div class="row gx-0">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Slider With Arrow</h3>
          </div>
        </div>
      </div>
      <div class="row gx-0">
        <div class="col-xxl-12">
          <!-- agency-slider-items -->
          <agency-slider-items />
          <!-- agency-slider-items -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AgencySliderItems from "~~/components/portfolios/AgencySliderItems.vue";

export default {
  components: { AgencySliderItems },
};
</script>
