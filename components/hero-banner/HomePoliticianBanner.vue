<template>
  <section class="slider__area fix">
    <div
      class="slider__item-10 slider__height-10 d-flex align-items-center black-bg-17 p-relative z-index-1"
    >
      <div
        class="slider__bg-10 include-bg jarallax"
        :style="{ backgroundImage: `url(${bg})` }"
      ></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-8">
            <div class="slider__content-10 mb-60">
              <span class="slider__title-pre-10">Hello, I’m Justin Case</span>
              <h3 class="slider__title-10">
                How plan <br />
                form the party.
              </h3>
              <p>Become a part of our team, sign up for updates.</p>

              <div class="slider__btn-10">
                <nuxt-link href="/about" class="tp-btn-7">
                  About Our Strategy 
                  <i class="fa-regular fa-angle-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-4 order-first order-sm-last"
          >
            <div class="slider__thumb-10 text-end">
              <span class="thumb-border"></span>
              <img src="~/assets/img/slider/10/slider-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from "~/assets/img/slider/10/slider-1.jpg";

export default {
  data() {
    return {
      bg,
    };
  },
};
</script>
