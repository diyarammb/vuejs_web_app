<template>
  <section class="about__area pt-120 pb-95 p-relative z-index-1">
    <div class="about__shape">
      <img
        class="about__shape-1"
        src="~/assets/img/about/5/shape/about-shape-1.png"
        alt=""
      />
      <img
        class="about__shape-2"
        src="~/assets/img/about/5/shape/about-shape-2.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div
            class="about__wrapper-5 pr-90 mb-10"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="1000"
          >
            <div class="section__title-wrapper-5 mb-35">
              <!-- <span class="section__title-pre-5">We are harry Agency</span> -->
              <h3 class="section__title-5">
                What Makes us  <br />
                Different From  <span class="has-light">others?</span>
              </h3>
            </div>

            <p>
              We redefine what it means to be a full-service digital agency. Our secret weapon is <strong>Intelligent Digital Fusion (IDF),</strong> a unique method that seamlessly blends cutting-edge technology, strategic thinking, and creative expertise. With IDF, we create comprehensive digital strategies that integrate web design, development, marketing, branding, and more. Our data-driven approach ensures that every element of our clients' digital presence works together to drive business growth and achieve outstanding results. With a focus on innovation and a relentless pursuit of excellence, eTechFlow empowers businesses to thrive in the dynamic digital landscape
             </p>

            <div class="about__btn-5">
              <nuxt-link href="/about" class="tp-btn-blue" style='background-color: #673c8b;;'>Know More</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div
            class="about__thumb-5"
            data-sal="slide-right"
            data-sal-delay="170"
            data-sal-duration="1000"
          >
            <div class="about__thumb-mockup wow">
              <img
                class="about-mockup-img"
                src="~/assets/img/about/5/about-thumb-mockup.png"
                alt=""
              />
              <img
                class="about-main-5"
                src="~/assets/img/about/5/about-thumb-1.jpg"
                alt=""
              />
              <a
                href="#"
                @click.prevent="handleVideoPopup"
                class="about-play-btn tp-pulse-border popup-video"
              >
                <span class="video-play-bg"></span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 11L0 21.3923V0.607696L18 11Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- video modal start -->
  <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/7e90gBu4pas"
  />
  <!-- video modal end -->
</template>

<script>
import VideoModal from "../common/modals/VideoModal.vue";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  components: { VideoModal },
  mixins:[SalScrollAnimationMixin],
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
