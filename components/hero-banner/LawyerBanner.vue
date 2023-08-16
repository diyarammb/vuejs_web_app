<template>
  <section
    class="slider__area slider-mt-50 p-relative z-index-1"
    data-bg-color="green-dark"
  >
    <div
      class="slider__mouse-scroll slider__mouse-scroll-4 smooth d-flex align-items-center"
    >
      <a href="#cases" class="mouse-scroll-icon mouse-scroll-icon-4"></a>
      <p><a href="#cases">Scroll Down</a></p>
    </div>
    <div class="slider__shape">
      <img
        class="slider__shape-4-1"
        src="~/assets/img/slider/4/slider-shape-1.png"
        alt=""
      />
      <img
        class="slider__shape-4-2 jarallax"
        src="~/assets/img/slider/4/slider-shape-2.png"
        alt=""
      />
      <img
        class="slider__shape-4-3 jarallax"
        src="~/assets/img/slider/4/slider-shape-3.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
          <div class="slider__content-4">
            <span class="slider__title-pre-4">Since 1975</span>
            <h3 class="slider__title-4">We're Certified Law Professionals</h3>
            <p>
              We support businesses through periods of expansion, Succession,
              and all other important transitions.
            </p>

            <div class="slider__btn-4">
              <nuxt-link href="/contact" class="tp-btn-brown">Get In Touch</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
          <div class="slider__thumb-4 m-img">
            <img
              data-sal="slide-up"
              data-sal-delay="130"
              data-sal-duration="1000"
              src="~/assets/img/slider/4/slider-thumb-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin]
};
</script>
