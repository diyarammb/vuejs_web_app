<template>
  <section :class="`cta__area p-relative z-index-1 ${el_style ? 'pt-120 pb-140' : ''}`">
    <div v-if="!el_style" class="cta__overlay-5"></div>
    <div class="container">
      <div class="cta__inner-5" data-bg-color="blue-dark">
        <div class="cta__shape">
          <img
            class="cta__shape-7"
            data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-1.png"
            alt="shape"
          />
          <img
            class="cta__shape-8"
            data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-2.png"
            alt="shape"
          />
          <img
            class="cta__shape-9"
            data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-3.png"
            alt="shape"
          />
          <img
            class="cta__shape-10"
            data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-4.png"
            alt="shape"
          />
          <img
            class="cta__shape-11"
            data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-5.png"
            alt="shape"
          />
          <img
            class="cta__shape-12"
            data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-6.png"
            alt="shape"
          />
          <img
            class="cta__shape-13"
            data-sal="slide-up" data-sal-delay="180" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-7.png"
            alt="shape"
          />
          <img
            class="cta__shape-14"
            data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-8.png"
            alt="shape"
          />
          <img
            class="cta__shape-15"
            data-sal="slide-up" data-sal-delay="1000" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-9.png"
            alt="shape"
          />
          <img
            class="cta__shape-16 wow fadeInUp"
            data-sal="slide-up" data-sal-delay="1100" data-sal-duration="1000"
            src="~/assets/img/cta/5/cta-shape-10.png"
            alt="shape"
          />
        </div>
        <div class="row align-items-center">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="cta__content-5">
              <span>Get to meet Your Next Agency</span>

              <h3 class="cta__title-5">
                Let’s talk about your next business challenge
              </h3>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="cta__btn-5 text-lg-end">
              <nuxt-link href="/contact" class="tp-btn-orange-2">Get in Touch</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
};
</script>
