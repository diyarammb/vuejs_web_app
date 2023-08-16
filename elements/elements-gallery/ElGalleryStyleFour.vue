<template>
  <section class="portfolio_area pt-110">
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Slider with hover effect</h3>
          </div>
        </div>
      </div>
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
import ArchitecturePortSliderItems from "~~/components/portfolios/ArchitecturePortSliderItems.vue";

export default {
  components: { ArchitecturePortSliderItems },
};
</script>

