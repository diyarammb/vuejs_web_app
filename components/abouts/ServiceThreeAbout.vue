<template>
  <section class="about__area pt-10 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div
            class="about__thumb-15 p-relative z-index-1 w-img"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="about__thumb-15-shape">
              <img src="~/assets/img/about/15/about-thumb-shape.png" alt="shape" />
            </div>
            <img
              class="about__thumb-15-shape-2"
              src="~/assets/img/about/15/about-thumb-shape-2.png"
              alt=""
            />
            <img src="~/assets/img/about/15/about-img-1.jpg" alt="shape" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div
            class="about__wrapper-15 pl-45"
            data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"
          >
            <div class="tp-section-wrapper-3 mb-25">
              <span class="tp-section-subtitle-3">WHAT WE DO</span>
              <h3 class="tp-section-title-4">
                The leading provider of digital services worldwide.
              </h3>
              <p>eTechFlow, we specialize in creating captivating front-end experiences that leave a lasting impression on your users</p>
            </div>
            <div class="about__list-2">
              <ul>
                <li>Web development and design</li>
                <li>Mobile Application development</li>
                <li>Custom Software Development</li>
                <li>Digital Marketing</li>
                <li>Branding And Graphics</li>
                <li>Manatainance and support</li>
              </ul>
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

};
</script>
