<template>
  <section class="cta__area pb-140">
    <div class="container">
      <div class="cta__inner-6 p-relative include-bg" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000" :style="{ backgroundImage: `url(${cta_bg})`}">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7">
            <div class="cta__content-6" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000">
              <h3 class="cta__title-6">About Your Next Projects.</h3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="cta__btn-6 text-lg-end" data-sal="slide-down" data-sal-delay="190" data-sal-duration="1000">
              <nuxt-link href="/contact" class="tp-btn-white-2 tp-link-btn-3">
                Get Started
                <span>
                  <i class="fa-regular fa-arrow-right"></i>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cta_bg from '~/assets/img/cta/6/cta-bg-1.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data (){
    return {
      cta_bg,
    }
  }
}
</script>
