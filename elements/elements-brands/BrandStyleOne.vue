<template>
  <section class="brand__area pt-110 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Brand Style 1</h3>
          </div>
        </div>
      </div>
      <div class="brand__inner purple-bg">
        <div class="row justify-content-center">
          <div class="col-xxl-10 col-xl-9 col-xl-10 col-11">
            <div class="brand__area">
              <div
                class="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start"
              >
                <h3 class="brand__title">Global Exparts:</h3>
                <brand-slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrandSlider from "~~/components/brands/BrandSlider.vue";
export default {
  components: { BrandSlider },
};
</script>
