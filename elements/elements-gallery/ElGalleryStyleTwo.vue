<template>
  <section class="portfolio__area portfolio__overlay-9 pt-110 fix">
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Slider With Scrollbar</h3>
          </div>
        </div>
      </div>
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
import PersonalPortSliderItems from "~~/components/portfolios/PersonalPortSliderItems.vue";
export default {
  components: { PersonalPortSliderItems },
};
</script>
