<template>
  <section
    class="slider__area slider__border slider__height-3 d-flex align-items-center p-relative box-plr-245 p-relative fix"
  >
    <div class="slider__shape">
      <img
        class="slider__shape-camera"
        src="~/assets/img/slider/3/slider-camera.jpg"
        alt="camera"
      />
    </div>
    <div
      class="slider__bg-3 include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xxl-8">
          <div
            class="slider__content-3 p-relative z-index-1"
            data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"
          >
            <span class="slider__title-pre-3">A GOOD PHOTOGRAPH IS</span>

            <h3 class="slider__title-3">
              Capturing <br />
              Beauty Photo
            </h3>

            <div class="slider__btn">
              <nuxt-link href="/portfolio" class="tp-btn-border-2">View My Work</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from "~/assets/img/slider/3/slider-1.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      bg,
    };
  },
};
</script>
