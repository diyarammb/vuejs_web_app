<template>
  <section class="about__area pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper-14 p-relative" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <div class="about__shape">
              <img class="about__shape-8" src="~/assets/img/about/14/about-shape-1.png" alt="">
              <img class="about__shape-9" src="~/assets/img/about/14/about-shape-2.png" alt="">
            </div>
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/about/14/about-img-1.jpg" alt="">
              <img class="about-img-2" src="~/assets/img/about/14/about-img-2.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about__wrapper-14 pl-75 pt-45" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="tp-section-wrapper-2 mb-40">
              <span class="tp-section-subtitle-2">EXPERIENCE AGENCY</span>
              <h3 class="tp-section-title-2">Create out standing and flexible digital services</h3>
              <p>We help our clients succeed by creating brand identities, digital experiences, and print materials
                achieve marketing goals.!</p>
            </div>

            <div class="about-btn">
              <nuxt-link href="/services" class="tp-btn">Our Services</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],

}
</script>
