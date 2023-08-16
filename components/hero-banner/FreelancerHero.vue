<template>
  <section class="slider__area pt-100 slider__overlay-2 slider__overlay-2-2 p-relative z-index-1">
    <div class="slider__shape-2">
      <img class="slider__shape-2-1" src="~/assets/img/slider/2/shape/slider-shape-1.png" alt="">
      <img class="slider__shape-2-2" src="~/assets/img/slider/2/shape/slider-shape-2.png" alt="">
      <img class="slider__shape-2-3" src="~/assets/img/slider/2/shape/slider-shape-3.png" alt="">
    </div>
    <div class="slider__portfolio-btn">
      <nuxt-link href="/portfolio-masonry" class="slider-portfolio-btn">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 2.25001C3.5 1.28351 2.7165 0.500001 1.75 0.500001C0.783502 0.500001 0 1.28351 0 2.25001C0 3.2165 0.783502 4 1.75 4C2.7165 4 3.5 3.2165 3.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M3.5 12.25C3.5 11.2835 2.7165 10.5 1.75 10.5C0.783502 10.5 0 11.2835 0 12.25C0 13.2165 0.783502 14 1.75 14C2.7165 14 3.5 13.2165 3.5 12.25Z"
            fill="currentColor" />
          <path
            d="M13.5 2.25001C13.5 1.28351 12.7165 0.500002 11.75 0.500002C10.7835 0.500002 10 1.28351 10 2.25001C10 3.2165 10.7835 4 11.75 4C12.7165 4 13.5 3.2165 13.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M13.5 12.25C13.5 11.2835 12.7165 10.5 11.75 10.5C10.7835 10.5 10 11.2835 10 12.25C10 13.2165 10.7835 14 11.75 14C12.7165 14 13.5 13.2165 13.5 12.25Z"
            fill="currentColor" />
        </svg>
        All Projects
      </nuxt-link>
    </div>
    <div class="slider__mouse-scroll smooth d-flex align-items-center">
      <a href="#about" class="mouse-scroll-icon"></a>
      <p><a href="#about">Scroll Down</a></p>
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-5 col-xl-5 col-lg-6">
          <div class="slider__content-2">
            <span class="slider__title-pre-2" data-sal="slide-up" data-sal-delay="130" data-sal-duration="700">
              Douglas Lyphe
            </span>
            <h3 class="slider__title-2" data-sal="slide-up" data-sal-delay="140" data-sal-duration="900">
              New Design Creation
            </h3>
            <div class="slider__btn-2" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1100">
              <nuxt-link href="/contact" class="tp-btn-green">Let’s talk</nuxt-link>
            </div>
            <div class="slider__review">
              <span class="slider__review-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.38703 1.15089L10.7954 3.98714C10.9875 4.3739 11.4996 4.76066 11.9264 4.82512L14.4764 5.25485C16.1088 5.53418 16.4929 6.71595 15.3193 7.89772L13.3347 9.90673C13.004 10.2398 12.8119 10.8951 12.9186 11.3678L13.4841 13.8495C13.9322 15.8048 12.8973 16.5676 11.1795 15.547L8.78954 14.1181C8.35209 13.8603 7.64791 13.8603 7.21046 14.1181L4.80982 15.5363C3.09204 16.5569 2.0571 15.7941 2.50522 13.8388L3.0707 11.3571C3.17739 10.8951 2.98534 10.2398 2.65459 9.89599L0.680735 7.90846C-0.492909 6.72669 -0.108807 5.53418 1.52362 5.2656L4.07363 4.83586C4.50041 4.76066 5.01254 4.38464 5.2046 3.99788L6.61297 1.16163C7.3705 -0.385415 8.6295 -0.385415 9.38703 1.15089Z"
                    fill="#008080" />
                </svg>
              </span>
              <p><span>Excellent</span> 4.9 out of 5</p>
              <span class="slider__review-client">
                <img src="~/assets/img/slider/2/slider-review.png" alt="">
             </span>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div class="slider__thumb-wrapper-2 pt-20 ml-40 " data-overlay="green" data-overlay-opacity="3">
            <div class="slider__thumb-2 m-img text-center" data-sal="slide-left" data-sal-delay="180" data-sal-duration="1200">
              <img src="~/assets/img/slider/2/slider-1.png" alt="">
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
}
</script>
